# Sajid Islam || [TACTICAL_INTEL] Portfolio

![Portfolio Preview](img/profile.jpg)

A high-performance, modular portfolio for a **Data Scientist & Business Analyst** built with a "Tactical HUD" aesthetic. This project combines modern web technologies with a terminal-driven user experience.

## 🚀 Key Features

- **PWA Ready**: Offline support and home screen installation via `sw.js`.
- **Tactical Terminal**: An interactive CLI for system diagnostics, project browsing, and session management.
- **Data-Driven Visualization**: Real-time session analytics and interactive skills radar charts.
- **Secure Portfolio Bridge**: A HUD-style window to browse external projects without leaving the site.
- **Modular Architecture**: Clean separation of concerns between structure (HTML), styling (CSS), and logic (JS).
- **Responsive Resume**: Integrated `resume.html` with PDF-export support.

## 📁 Directory Structure

```text
├── css/               # Modular CSS (HUD, Tactical, Enhancements)
│   ├── modern-custom.css
│   ├── tactical-hud.css
│   ├── tactical-enhancements.css
│   ├── floating-widgets.css
│   ├── github-feed.css
│   └── deep-black-terminal.css
├── img/               # Profile and project images
├── js/                # Modular JavaScript
│   ├── data.js        # Central data source — all portfolio content
│   ├── terminal.js    # Terminal logic
│   ├── tactical-core.js
│   ├── tactical-data.js
│   ├── tactical-enhancements.js
│   ├── ai-bot.js      # AI assistant (Gemini / local knowledge)
│   ├── github-feed.js # GitHub activity feed
│   └── ...            # Other helpers
├── scripts/           # Python & Data utility scripts
├── scss/              # SASS source files
├── sw.js              # Service Worker (PWA offline support)
├── manifest.json      # PWA manifest
└── index.html         # Main operative interface
```

> **Note:** Third-party libraries (Bootstrap 5.3, Font Awesome 6.4) are loaded via CDN — no local `vendor/` directory.

## 🛠️ Development & Deployment

### Quick Start
1.  **Clone**: `git clone https://github.com/Sajid-ul-Islam/Sajid-ul-Islam.github.io.git`
2.  **Install**: `npm install` (requires Node.js)
3.  **Run**: `npm start` (opens BrowserSync on port 3000)

### Building Assets
The project uses Gulp to manage SASS, JS minification, and asset bundling:
- `npm start`: Live-reload development mode with BrowserSync.
- `npm run build`: Compiles all assets for production.
- `npm run bundle`: Bundles and minifies CSS/JS into `dist/` for optimal performance.
- `npm run build:prod`: Full production build with bundling.

### Performance Optimizations Implemented
- **Preconnect hints**: DNS prefetch and preconnect to critical origins (fonts, CDNs)
- **Deferred loading**: Non-critical JS loads with `defer` attribute
- **Lazy-loaded Chart.js**: Chart library loads on-demand when skills section is visible
- **CSS/JS bundling**: Use `npm run bundle` to create optimized `dist/bundle.min.css` and `dist/critical.min.js`
- **Error boundaries**: Render functions have try-catch error handling with user-friendly error messages

### Static Data
The `PortfolioData.xlsx` file in the `scripts/` folder contains the master copy of the portfolio data. Use `generate_spreadsheet.py` to regenerate values if needed.

## 🔑 AI Bot Configuration
The AI Oracle chatbot works using local knowledge by default. To enable live Gemini AI responses:
1.  Click the **Terminal** icon to open the tactical terminal.
2.  Type `link_gemini YOUR_API_KEY` and press Enter.
3.  Your key is stored only in your browser's `localStorage` — it is never committed to the repo.

## 📝 License
Copyright © 2025 Sajid Islam. Released under the MIT License.
Based on the [Start Bootstrap Resume](https://startbootstrap.com/template-overviews/resume/) template.
