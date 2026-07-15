import React, { useState, useEffect } from 'react';
import SketchbookTheme from './themes/SketchbookTheme';
import TacticalTheme from './themes/TacticalTheme';
import IronforgeTheme from './themes/IronforgeTheme';
import VanillaWidgets from './components/Shared/VanillaWidgets';
import ThemePanel from './components/Shared/ThemePanel';

function App() {
  // Try to load theme from localStorage, default to sketchbook
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'sketchbook';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', currentTheme);
    document.body.className = `theme-${currentTheme}`;
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
      <div className="fixed top-4 right-4 z-[999]">
        <ThemePanel currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
      </div>
    </div>
  );
}

export default App;
