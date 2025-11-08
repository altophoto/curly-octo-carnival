# Family Groovy Night

A beautiful, personal film and TV logging app with a retro theater marquee display. Built with Vue 3 and stored entirely in GitHub (no database needed!).

![Screenshot of theater marquee display](/theater-marquee.png)

## Features

- 🎭 **Retro Theater Marquee** - Beautiful rotating poster display with "showtimes"
- 📊 **Smart Organization** - Tag-based categorization, searchable, sortable
- 🎬 **TMDb Integration** - Auto-fill movie details and posters
- 📱 **Responsive Design** - Works great on phone, tablet, desktop
- 🔒 **Privacy First** - Your data stays in your private GitHub repo
- 📈 **Statistics** - Track your viewing habits over time

## Quick Start

### 1. Fork This Repo
Click the "Fork" button above to create your own copy.

### 2. Create Your Private Data Repo
1. Create a new **private** GitHub repository (e.g., `my-film-data`)
2. Copy the files from `example-data/` into your private repo
3. Structure should be:
```
   my-film-data/
   ├── films.json
   ├── directors.json
   └── tags/
       ├── genres.json
       ├── awards.json
       ├── themes.json
       ├── technical.json
       └── opinions.json
```

### 3. Update Configuration
Edit `index.html` and change line 70:
```javascript
githubRepo: 'my-film-data', // ← Your private data repo name
```

### 4. Deploy to Netlify
1. Go to [Netlify](https://netlify.com)
2. "Import from Git" → Select your forked repo
3. Deploy!

### 5. Configure GitHub Token
1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. In your deployed app, go to Settings → Paste your token
4. Start logging films!

### 6. (Optional) TMDb API Key
For poster images and auto-fill:
1. Get free API key at [TMDb](https://www.themoviedb.org/settings/api)
2. Add in Settings → TMDb API Setup

## Usage

- **Add Films:** Click "+ Add Film/Show" button
- **Search TMDb:** Use the auto-fill button when adding titles
- **Organize:** Create custom tags in Settings
- **Customize:** Toggle column visibility for your preferred view
- **Export:** Download JSON or PDF backup anytime

## Architecture

This app uses GitHub as a database:
- **Code Repo (Public):** The application code you forked
- **Data Repo (Private):** Your personal viewing data
- **No Backend:** Everything runs client-side
- **GitHub API:** Read/write directly to your repos

## License

MIT - Feel free to fork and customize!

## Credits

Built by a self-taught tinkerer who loves movies and elegant code.


