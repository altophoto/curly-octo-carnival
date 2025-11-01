// This is the netlify/functions/proxy.js file

// This function will run on a secure server, not in the browser.
// process.env contains the secrets you will add in the Netlify UI.
const {
  GITHUB_PAT,
  GITHUB_OWNER,
  GITHUB_REPO
} = process.env;

// The main function handler
exports.handler = async (event) => {
  
  // 1. Get the file path from the request
  // (e.g., /api/films.json becomes /films.json)
  const filePath = event.path.replace("/api/", "");
  const method = event.httpMethod; // "GET", "PUT", etc.
  
  // 2. Build the URL for the GitHub API
  const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`;

  try {
    // 3. Handle a "GET" request (loading data)
    if (method === "GET") {
      const response = await fetch(GITHUB_API_URL, {
        headers: {
          "Authorization": `token ${GITHUB_PAT}`,
          "Accept": "application/vnd.github.v3+json"
        }
      });
      
      if (!response.ok) {
        throw new Error(`GitHub GET Error: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Send the file content and sha back to your Vue app
      return {
        statusCode: 200,
        body: JSON.stringify({
          content: data.content, // This is the base64 string
          sha: data.sha       // The sha is needed for updates
        })
      };
    }

    // 4. Handle a "PUT" request (saving data)
    if (method === "PUT") {
      // The new file content is in the event body
      const body = JSON.parse(event.body);
      
      const response = await fetch(GITHUB_API_URL, {
        method: "PUT",
        headers: {
          "Authorization": `token ${GITHUB_PAT}`,
          "Accept": "application/vnd.github.v3+json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: `Update ${filePath} from app`,
          content: body.content, // base64 content
          sha: body.sha          // The sha you're updating
        })
      });
      
      if (!response.ok) {
        throw new Error(`GitHub PUT Error: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Send the new file's sha back to the app
      return {
        statusCode: 200,
        body: JSON.stringify({
          sha: data.content.sha
        })
      };
    }

    // 5. Handle other methods (like POST)
    return { statusCode: 405, body: "Method Not Allowed" };

  } catch (error) {
    console.error("Function Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
