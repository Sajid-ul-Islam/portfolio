import React, { useState, useEffect } from 'react';
import SketchbookTheme from './themes/SketchbookTheme';
import TacticalTheme from './themes/TacticalTheme';
import IronforgeTheme from './themes/IronforgeTheme';
import VanillaWidgets from './components/Shared/VanillaWidgets';

function App() {
  // Try to load theme from localStorage, default to sketchbook
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'sketchbook';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', currentTheme);
    document.body.className = `theme-${currentTheme}`;

    // Initialize the legacy dark/light mode ripple toggler for the newly mounted theme button
    const initRipple = () => {
      if (window.initThemeToggleWithRipple) {
        window.initThemeToggleWithRipple({
          buttonId: currentTheme === 'sketchbook' ? 'themeToggle' : 'theme-toggle',
          getTheme: () => document.documentElement.getAttribute('data-theme') || 'dark',
          applyTheme: (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            const icon = document.querySelector('#themeToggleIcon') || document.querySelector('#theme-toggle i') || document.querySelector('#themeToggle i');
            if (icon) {
              icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
            }
          },
          saveTheme: (theme) => localStorage.setItem('portfolio_mode', theme)
        });
      }
    };

    // Give DOM a tick to render the new button before binding
    const timer = setTimeout(initRipple, 100);
    return () => clearTimeout(timer);
  }, [currentTheme]);

  // Restore dark/light mode preference on initial load, runs only once
  useEffect(() => {
    const savedMode = localStorage.getItem('portfolio_mode') || 'dark';
    document.documentElement.setAttribute('data-theme', savedMode);
  }, []);

  // Render the selected theme
  const renderTheme = () => {
    switch (currentTheme) {
      case 'tactical':
        return <TacticalTheme />;
      case 'ironforge':
        return <IronforgeTheme />;
      case 'sketchbook':
      default:
        return <SketchbookTheme />;
    }
  };

  return (
    <div className="App relative min-h-screen">
      {renderTheme()}

      {/* Global Vanilla Widgets for floating legacy UI */}
      <VanillaWidgets />

      {/* Floating Theme Switcher */}
      <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur border border-white/20 p-2 rounded-full flex gap-2 shadow-xl shadow-black/50">
        <button
          onClick={() => setCurrentTheme('sketchbook')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentTheme === 'sketchbook' ? 'bg-white text-black scale-110' : 'text-white hover:bg-white/20'}`}
          title="Sketchbook Theme"
        >
          <i className="fas fa-pencil-ruler"></i>
        </button>
        <button
          onClick={() => setCurrentTheme('tactical')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentTheme === 'tactical' ? 'bg-[var(--primary,#00ffcc)] text-black scale-110' : 'text-white hover:bg-white/20'}`}
          title="Tactical HUD Theme"
        >
          <i className="fas fa-crosshairs"></i>
        </button>
        <button
          onClick={() => setCurrentTheme('ironforge')}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentTheme === 'ironforge' ? 'bg-[#ff4d00] text-black scale-110' : 'text-white hover:bg-white/20'}`}
          title="Ironforge Theme"
        >
          <i className="fas fa-hammer"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
