# Theming Architecture

The portfolio implements a **Multi-Page Theming Architecture**. This means that distinct themes (which completely alter the UI/UX layout, DOM structure, and CSS framework) are split into separate HTML files at the root level, rather than using CSS variable toggles on a single `index.html` file.

This approach guarantees that:
1. Each theme can use entirely different HTML structures (e.g., standard Bootstrap vs Tailwind blocks).
2. The core data (skills, projects, etc.) can be mapped independently to fit the constraints of each layout.
3. Adding new themes does not pollute or bloat the main `index.html` file.

## How Themes Work
- **Entry Point**: `index.html` is the primary, default theme (Tactical HUD).
- **Secondary Themes**: Stored in the root directory with a `theme-` prefix (e.g., `theme-ironforge.html`).
- **Data Mapping**: Each theme has its own data ingestion logic, or it taps into `js/tactical-data.js` to fetch and render the Google Sheet data. Since layouts differ, each theme may have a companion JS file to map the data (e.g., `js/theme-ironforge.js`).

## How to Add a New Theme
If a future agent needs to add a new theme layout (e.g., `theme-cyberpunk.html`):
1. Create the new HTML file in the root directory.
2. Add the Theme Switcher Dropdown (a bootstrap dropdown or custom UI) into the new theme's navigation bar to allow users to switch between themes.
3. Add a link to the new theme in the Theme Switcher Dropdowns across all *other* theme HTML files (e.g., update `index.html` and `theme-ironforge.html` so they list the new theme).
4. (Optional) Write a companion JS file to fetch `DATA` and map it into the new theme's unique DOM elements.
