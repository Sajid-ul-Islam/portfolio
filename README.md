# Sajid Islam || [TACTICAL_INTEL] Portfolio (React SPA)

A high-performance, modular portfolio for a **Data & Business Analyst**. This project has been migrated to a React Single Page Application (SPA) powered by Vite.

## 🚀 Key Features

- **Modular React Architecture**: Built with Vite and React for fast HMR and optimized builds.
- **Centralized Data**: All portfolio data is centralized in `src/data/portfolio.json`.
- **Dynamic Theming Context**: Instant switching between different aesthetic themes using React Context without page reloads.
- **GitHub Pages Ready**: Configured for seamless deployment to GitHub Pages.

## 📁 Directory Structure

```text
├── legacy/                 # Archived vanilla HTML/JS/CSS codebase
├── src/                    # React Source Code
│   ├── components/         # Shared UI components
│   ├── context/            # React Contexts (ThemeContext, DataContext)
│   ├── data/               # Centralized portfolio data (portfolio.json)
│   ├── themes/             # Theme-specific components
│   │   ├── SketchbookTheme/
│   │   ├── TacticalTheme/
│   │   └── IronforgeTheme/
│   ├── App.jsx             # Main App component (Theme Router)
│   └── main.jsx            # React Entry Point
├── public/                 # Static assets
├── vite.config.js          # Vite build configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Development & Deployment

### Quick Start
1. **Clone**: `git clone https://github.com/Sajid-ul-Islam/Sajid-ul-Islam.github.io.git`
2. **Install**: `npm install` (requires Node.js)
3. **Run**: `npm run dev` (opens Vite dev server)

### Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Production build with Vite |
| `npm run preview` | Preview production build locally |

### Adding / Updating Data
Simply edit `src/data/portfolio.json`. The `DataContext` automatically provides this data to all active themes, ensuring instant updates across the entire site.

## 📝 License
Copyright © 2026 Sajid Islam. Released under the MIT License.
