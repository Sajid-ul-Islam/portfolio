# Migration Context & Next Steps

This file serves as a comprehensive handover document for the ongoing React migration of the portfolio app.

## 1. What Has Been Completed

### A. Build System & Styling
- **Vite & React:** The repository is now initialized as a fully functioning Vite + React application.
- **Tailwind CSS:** Integrated Tailwind v4 (`@tailwindcss/vite`), which powers global utilities and replaces older ad-hoc CSS rules.

### B. Legacy Theme Conversion
All three legacy HTML templates have been ported to React JSX:
1. `src/themes/SketchbookTheme/index.jsx`
2. `src/themes/TacticalTheme/index.jsx`
3. `src/themes/IronforgeTheme/index.jsx`

*Note: All three themes currently compile successfully via `npm run build` with zero JSX syntax errors.*

### C. Data Context (Modular Architecture)
- A global `DataContext.jsx` wrapper has been implemented.
- The `src/data/data.json` file now acts as the single source of truth for portfolio content.
- **Status:** `SketchbookTheme` is fully mapped to `DataContext`. `TacticalTheme` is partially mapped (Hero section).

### D. Global Widgets (Tech Debt Management)
- To retain complex legacy animations (AI Bot, Command Palette, Terminal Modal, GitHub Feed) without blocking the migration, these components were extracted into `src/components/Shared/VanillaWidgets.jsx`.
- This ensures the floating widgets load globally across all themes, behaving exactly as they did in vanilla JS, but isolated from React's virtual DOM.
- A `TECH_DEBT.md` file tracks the requirement to eventually refactor these into native React components.

---

## 2. What Still Needs to be Done (Next Session)

If this session expires, use this list to pick up right where we left off:

### [Priority 1] Complete Data Mapping
The data from `data.json` (Experience, Projects, Education, Skills) must be fully mapped into the remaining two themes:
1. `TacticalTheme`
2. `IronforgeTheme`

Currently, they are rendering hardcoded HTML placeholders. You will need to replace the static HTML blocks with `.map()` functions iterating over `data.experiences`, `data.projects`, etc., using the `useData()` hook.

### [Priority 2] Implement Theme Switcher
Right now, only one theme is rendered in `App.jsx` at a time.
- Build a global `ThemeContext` or use React state in `App.jsx` to dynamically switch between `SketchbookTheme`, `TacticalTheme`, and `IronforgeTheme`.
- Ensure CSS variables required by each theme do not conflict globally when switched.

### [Priority 3] Clean Up Dead Code
Once the above is complete and the React app is confirmed fully functional:
- Delete the `legacy/` directory containing the old `.html` and vanilla scripts.
- Remove old CSS files no longer needed after Tailwind integration.

### [Priority 4] Native React Refactor for Vanilla Widgets (Long Term)
As documented in `TECH_DEBT.md`, the `VanillaWidgets.jsx` relies on raw DOM injection (`dangerouslySetInnerHTML`) and executes legacy scripts (`node -e`). 
- Rewrite the Terminal logic using React state.
- Rewrite the AI Bot chat mechanics using React hooks.

---

## 3. How to Resume Work
- **To run the app locally:** `npm run dev`
- **To verify JSX structure:** `npm run build`
- **To continue mapping data:** Examine how it was done in `src/themes/SketchbookTheme/index.jsx` and replicate it for the other themes.
