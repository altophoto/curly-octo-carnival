# curly-octo-carnival
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


Stage 1 (Now): Solo hobby ✅

Fun, simple, one HTML file
Experiment with features (tag styling, directors, etc.)
Zero pressure

Stage 2: Family (4 users) 🎯 DO THIS

This is where you learn THE MOST
Your daughters will break things in creative ways
Your wife will ask "why doesn't it...?" questions that reveal UX truths
You'll discover which features matter vs. which are ego
Simple solution: Each person gets their own GitHub token → their own data files
Still one HTML file, just different configs

Stage 3: Friends/parents (select invites) 🎯 DO THIS TOO

Real-world beta testing with people who aren't coders
You'll find all the "obvious" things that aren't obvious
Low stakes if something breaks
Solution: Firebase Auth (free tier) + user-specific data folders
This is where you learn what business version needs

Stage 4: Business (250+ customers) 💼 FORK & START FRESH

Take everything learned from Stages 1-3
Build security-first from scratch
Different codebase, informed by hobby version
Self-hosted Supabase or similar

Keep the hobby version FUN and SIMPLE.

Don't worry about business customers yet
Add the teenage-font-styling thing
Let your daughters customize it
Watch what breaks when 4 people use it

When you hit Stage 4, you'll know EXACTLY what to build because you'll have:

Real usage patterns
Real user feedback
Real feature priorities
Real complexity that matters vs. complexity that doesn't