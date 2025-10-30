# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Family Groovy Night** - A film tracking web application for family movie nights. Currently in Stage 1 (solo hobby), designed to evolve into a multi-user family application and eventually inform business software development.

**Live Site**: https://altophoto.github.io/curly-octo-carnival/

**Purpose**: This is a learning project focused on data management, UI/UX design, and progressive feature development. The goal is to learn by building something fun before applying those lessons to business contexts.

## Tech Stack

- **Vue.js 3** (CDN) - Reactive UI framework
- **Vanilla JavaScript** - Core application logic
- **jsPDF + AutoTable** - PDF export functionality
- **Pure CSS** - Animations and styling (no framework)
- **GitHub Pages** - Free hosting
- **JSON files** - Data storage (no backend yet)

### Why This Stack?

- **Single HTML file** - Easy to understand, no build process
- **No backend** - Keeps it simple for Stage 1
- **CDN dependencies** - No npm, no package management
- **Static hosting** - Free and instant deployment

## File Structure

```
curly-octo-carnival/
├── index.html           # Main application (3,523 lines)
├── backupIndex.html     # Previous version backup
├── films.json           # Film database
├── tags.json            # Tag definitions and styling
├── directors.json       # Director information
├── README.md            # Project roadmap
└── CLAUDE.md            # This file
```

## Architecture

### Single Page Application (SPA)

Everything is in `index.html`:
- **HTML structure** (lines 1-200 approx)
- **CSS styling** (lines 200-1500 approx) - includes marquee animations, tag styling, responsive design
- **Vue.js application** (lines 1500-3523) - data fetching, filtering, sorting, PDF export

### Data Flow

1. **Load JSON files** on page load (films.json, tags.json, directors.json)
2. **Vue reactive state** manages all data
3. **Computed properties** handle filtering, sorting, statistics
4. **User interactions** update Vue state
5. **DOM updates automatically** via Vue reactivity

### Key Features

- **Animated marquee theater** header with sparkly lights and color-cycling title
- **Film cards** with metadata (director, year, duration, tags, platforms)
- **Multi-filter system** - by tag, director, platform, watchlist status
- **Search functionality** - searches titles and directors
- **Sorting options** - by date added, title, year, duration
- **Statistics dashboard** - shows film counts by various dimensions
- **PDF export** - generates formatted reports
- **Responsive design** - works on mobile, tablet, desktop

## Development Workflow

### Local Development

**Option 1: Direct file opening**
```bash
# Open directly in browser
start index.html  # Windows
```

**Option 2: Local server** (recommended for testing fetch requests)
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Making Changes

1. **Edit in VS Code** (user prefers this - has "Change All Occurrences" feature)
2. **Test in browser** (refresh to see changes)
3. **Validate JSON** if editing data files (use VS Code's JSON validator)
4. **Backup before major changes** (copy index.html to backupIndex-YYYY-MM-DD.html)

### Git Workflow (Claude handles this)

**User preference**: User finds Git confusing and prefers Claude to handle Git operations.

When changes are ready to save and publish:

```bash
# Claude will run these commands:
git add .
git commit -m "Description of changes"
git push origin main
```

**Note**: Changes to `main` branch automatically deploy to GitHub Pages (usually within 1-2 minutes).

### Viewing Changes Live

After pushing to GitHub:
1. Wait 1-2 minutes for GitHub Pages to rebuild
2. Visit: https://altophoto.github.io/curly-octo-carnival/
3. Hard refresh: Ctrl+Shift+R (Chrome/Edge) or Cmd+Shift+R (Mac)

## Data Management

### films.json Structure

Each film entry:
```json
{
  "line": 1,
  "film": "The Hudsucker Proxy",
  "link": "https://www.imdb.com/title/tt0110074/",
  "duration": 111,
  "platform": "Other",
  "platformLink": "https://www.lookmovie2.to/...",
  "podcastLink": "https://drive.google.com/file/d/...",
  "tags": ["Workplace"],
  "dateAdded": "2025-10-27",
  "year": 1994,
  "director": "Joel and Ethan Coen",
  "type": "movie"
}
```

**Important fields**:
- `line` - Sequential numbering (for ordering)
- `film` - Title (searchable)
- `director` - Full director name (searchable, filterable)
- `tags` - Array of tag strings (must match tags.json)
- `platform` - Netflix, Amazon, Disney+, Other, or empty string
- `year` - Release year (used for sorting and statistics)
- `duration` - Runtime in minutes
- `type` - "movie" or "show" (for future TV series support)

### tags.json Structure

Each tag has visual styling:
```json
{
  "tag": "Stephen King",
  "bgColor": "#1a1a2e",
  "textColor": "#ff6b6b"
}
```

**Important**: Tags in `films.json` must have corresponding entries in `tags.json` or they won't display with styling.

### directors.json Structure

```json
{
  "name": "Joel and Ethan Coen",
  "description": "Optional bio or notes"
}
```

**Note**: Currently minimal usage. Future enhancement could add director photos, filmographies, etc.

## Common Tasks

### Adding a New Film

1. Open `films.json` in VS Code
2. Add new entry at the end of the array (before closing `]`)
3. Set `"line"` to next sequential number
4. Fill in all required fields
5. Save and validate JSON (VS Code will show errors if invalid)
6. Test locally by opening `index.html`
7. Tell Claude to commit and push when ready

### Creating a New Tag

1. Open `tags.json`
2. Add new tag with unique `bgColor` and `textColor`
3. Save
4. Open `films.json` and add tag to relevant films
5. Test to ensure styling appears correctly

**Color picking tips**:
- Use complementary colors for readability
- Test on dark background (#0a0a0a)
- Check contrast: https://webaim.org/resources/contrastchecker/

### Editing the UI/Styling

Most styling is in the `<style>` section of `index.html`:

- **Lines ~10-200**: Base styles (body, layout, colors)
- **Lines ~22-143**: Marquee theater animation
- **Lines ~150-400**: Tag styling (badges, buttons)
- **Lines ~400-800**: Film card styling
- **Lines ~800-1200**: Filters and controls
- **Lines ~1200-1500**: Responsive design (media queries)

**User preference**: User enjoys experimenting with visual design. Feel free to suggest creative CSS animations, color schemes, or layout improvements.

### Testing Changes

**Before committing**:
1. ✅ Open index.html in browser - does it load?
2. ✅ Check browser console (F12) - any errors?
3. ✅ Test filters - do they work?
4. ✅ Test search - does it find films?
5. ✅ Test sorting - does order change correctly?
6. ✅ Validate JSON files - proper syntax?
7. ✅ Test on mobile size (responsive design) - does layout adapt?

### Deploying Changes

**Simple workflow**:
1. User: "Claude, please save and publish these changes"
2. Claude runs: `git add . && git commit -m "..." && git push`
3. Wait 1-2 minutes
4. Check live site: https://altophoto.github.io/curly-octo-carnival/

## VS Code Integration

User prefers VS Code for editing. Useful features:

- **Ctrl+H** - Find and Replace with "Replace All"
- **Ctrl+D** - Select next occurrence
- **Ctrl+Shift+L** - Select all occurrences
- **Alt+Click** - Multiple cursors
- **Ctrl+Space** - IntelliSense (shows suggestions)
- **Ctrl+K, Ctrl+0** - Fold all sections
- **Ctrl+K, Ctrl+J** - Unfold all sections

## Stage 2 Planning (Multi-User Family Version)

**Goal**: Support 4 family members with separate watchlists and ratings.

**Challenges to solve**:
- User authentication (GitHub tokens? Firebase Auth?)
- Separate data files per user vs shared data
- Conflict resolution (two people editing simultaneously)
- Privacy (kids shouldn't see parent ratings/notes)

**Approach** (per README.md):
- Start simple: Each person gets their own GitHub token → their own data files
- Still one HTML file, different configs
- Learn what breaks when 4 people use it
- Don't over-engineer - keep it fun

**Note**: Don't implement Stage 2 yet. Focus on perfecting Stage 1 solo experience first. When ready, the user will explicitly say "let's start Stage 2."

## Important Considerations

### User Background
- **Not a professional developer** - self-taught, experimenting
- **Visual/design focused** - enjoys CSS animations and UI polish
- **Data-curious** - wants to learn data management through doing
- **Solo learner** - no team, no code review, learning by building

### Code Quality Expectations
- **Readability over cleverness** - code should be easy to understand
- **Comments for complex logic** - especially Vue computed properties
- **Consistent formatting** - but don't over-optimize
- **Working code > perfect code** - iteration is better than perfection

### Git Philosophy
- **Main branch only** - no branching complexity needed yet
- **Commit frequently** - small commits are fine
- **Descriptive messages** - but keep them simple
- **No rebasing/squashing** - keep history linear and simple

### Feature Development
- **User-driven** - wait for user to request features, don't suggest too many at once
- **Iterative** - build one small thing at a time
- **Test immediately** - see it work before moving to next feature
- **Break when needed** - if something is too complex, simplify or defer

## Troubleshooting

### Browser Not Showing Changes
- Hard refresh: Ctrl+Shift+R or Cmd+Shift+R
- Clear cache: Ctrl+Shift+Delete
- Check if file saved (look for dot in VS Code tab)
- Check browser console for errors (F12)

### JSON Not Loading
- Validate JSON syntax (use VS Code or jsonlint.com)
- Check for trailing commas (not allowed in JSON)
- Ensure UTF-8 encoding (no special characters breaking format)
- Check browser network tab (F12 → Network) for 404 errors

### Git Push Failed
- Check internet connection
- Verify GitHub credentials are set up
- Check if repository exists: https://github.com/altophoto/curly-octo-carnival
- Try: `git status` to see current state

### GitHub Pages Not Updating
- Wait 2-3 minutes (can be slow)
- Check GitHub Actions tab for build status
- Verify `index.html` exists in main branch
- Ensure GitHub Pages is enabled in repository settings

### Vue Not Working
- Check browser console for Vue errors
- Verify Vue CDN is loading (network tab)
- Check `Vue.createApp` syntax (Vue 3 syntax)
- Verify `#app` element exists in HTML

## Future Enhancements (Ideas, Not Priorities)

When user is ready and explicitly requests:

**Stage 1 Polish**:
- Export to CSV (in addition to PDF)
- Dark/light theme toggle
- Film poster images (from TMDB API?)
- Watch history / completion dates
- Personal ratings system
- Custom tag colors per user preference

**Stage 2 Features** (multi-user):
- User profiles with avatars
- Individual watchlists
- Shared "family queue"
- Voting system for next film
- Watch history per person
- Private notes per user

**Stage 3 Features** (friends/beta):
- Public film recommendations
- Discussion/comment threads
- Social features (likes, shares)
- Film night scheduling
- Invitation system

**Stage 4 Features** (business):
- Complete rewrite with proper backend
- Authentication and authorization
- Role-based permissions
- Analytics and reporting
- API for integrations
- Scalable database

## Commands Reference (For Claude)

### Development
```bash
# Start local server
python -m http.server 8000

# Open in default browser (Windows)
start index.html
```

### Git Operations
```bash
# Check status
git status

# Stage changes
git add .
git add films.json           # Specific file
git add index.html tags.json # Multiple files

# Commit
git commit -m "Add new Stephen King films"

# Push to GitHub (auto-deploys to GitHub Pages)
git push origin main

# View commit history
git log --oneline -10

# See what changed
git diff
git diff films.json

# Undo uncommitted changes
git checkout -- filename.json
```

### Validation
```bash
# Validate JSON (using Python)
python -m json.tool films.json
python -m json.tool tags.json
python -m json.tool directors.json

# Count films
pwsh -Command "(Get-Content films.json | ConvertFrom-Json).Count"

# Count lines in index.html
pwsh -Command "(Get-Content index.html).Count"
```

## Remember

- **Keep it fun** - this is a hobby project, not work
- **User learns by doing** - help them understand, don't just do it for them
- **Git is scary to user** - handle it smoothly, explain gently
- **Praise creative ideas** - user is building something they're proud of
- **Small iterations** - one feature at a time
- **Test everything** - nothing goes live without working

This project is about learning data management through building something enjoyable. It's not about perfect code - it's about progress, experimentation, and having fun with family movie nights.
