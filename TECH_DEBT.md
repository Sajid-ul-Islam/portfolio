# Tech Debt & Future Development

## 1. Vanilla Widgets Porting to React
Currently, the global widgets (`ai-bot.js`, `terminal.js`, `command-palette.js`, `floating-widgets.js`, `theme-switcher-ripple.js`) are loaded as legacy vanilla Javascript files injected via `src/components/Shared/VanillaWidgets.jsx`. 
While this speeds up the initial migration and preserves the legacy animations, these components should eventually be ported to native React components to fully embrace the modular architecture.

**Sub-tasks:**
- [ ] Port `ai-bot.js` into a React component utilizing state for chat messages.
- [ ] Port `terminal.js` into a React component utilizing state for terminal logs.
- [ ] Port `command-palette.js` into a React component for global search.
- [ ] Refactor the theme switching ripple animation into a React hook or component.
- [ ] Clean up the legacy Vanilla DOM dependencies.

## 2. Complete Data Mapping
Ensure all remaining static text across themes (IronforgeTheme) is bound to the central `data.json` using the `useData()` hook.
