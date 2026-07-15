# Theming Architecture (React SPA)

The portfolio now implements a **Context-Based Dynamic Theming Architecture** using React and Vite.

## Core Theming Components

### 1. `ThemeContext` (`src/context/ThemeContext.jsx`)
- Manages the active theme globally (e.g., `theme-sketchbook`, `theme-tactical`, `theme-ironforge`).
- Persists the user's preferred theme in `localStorage` so their choice is remembered across sessions.

### 2. `App.jsx` (Theme Router)
- Instead of using a gateway `index.html` to redirect to different HTML files, `App.jsx` dynamically renders the correct React component based on the `ThemeContext`.
- This provides an instant, seamless transition between themes without full page reloads.

### 3. `DataContext` (`src/context/DataContext.jsx`)
- The single source of truth for the entire portfolio's data.
- It loads data from `src/data/portfolio.json`.
- All theme components consume this context using the `useData()` hook to render experiences, projects, skills, etc.

## How to Add a New Theme

1. **Create Theme Folder**: Create a new folder in `src/themes/` (e.g., `src/themes/CyberpunkTheme`).
2. **Create Component**: Create an `index.jsx` in that folder that consumes `useData()` and renders the UI.
3. **Update Router**: Import the new theme in `src/App.jsx` and add it to the conditional rendering block.
4. **Update Switcher**: Add the new theme option to the theme select dropdown in `App.jsx` (or your shared ThemeSwitcher component).
