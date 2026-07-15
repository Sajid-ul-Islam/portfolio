import React, { useState, useEffect } from 'react';
import SketchbookTheme from './themes/SketchbookTheme';
import TacticalTheme from './themes/TacticalTheme';
import IronforgeTheme from './themes/IronforgeTheme';
import ThemePanel from './components/Shared/ThemePanel';

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'sketchbook';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', currentTheme);
    document.body.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  const renderTheme = () => {
    switch(currentTheme) {
      case 'tactical': return <TacticalTheme />;
      case 'ironforge': return <IronforgeTheme />;
      case 'sketchbook':
      default: return <SketchbookTheme />;
    }
  };

  return (
    <div className="App relative min-h-screen">
      {/* Global SVG Filters — for view-transition water drop effect */}
      <svg aria-hidden="true" width="0" height="0" className="pointer-events-none fixed" style={{ position: 'fixed', zIndex: -1 }}>
        <defs>
          <filter id="theme-water-warp" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="5" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      {renderTheme()}
      <ThemePanel currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
    </div>
  );
}

export default App;
