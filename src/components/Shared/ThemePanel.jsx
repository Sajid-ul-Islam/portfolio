import React, { useState, useEffect, useRef } from 'react';
import { useColorTheme } from '../../hooks/useColorTheme';
import './ThemePanel.css';

const THEMES = [
  { key: 'sketchbook', label: 'Sketchbook', icon: 'fa-pencil-ruler', desc: 'Clean & minimal' },
  { key: 'tactical',   label: 'Tactical',   icon: 'fa-crosshairs',  desc: 'Terminal HUD' },
  { key: 'ironforge',  label: 'Ironforge',  icon: 'fa-hammer',      desc: 'Industrial forge' },
];

export default function ThemePanel({ currentTheme, onThemeChange }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const { mode, setMode, accent, setAccent, palettes } = useColorTheme();

  // Initialize ripple theme toggler
  useEffect(() => {
    if (window.initThemeToggleWithRipple) {
      window.initThemeToggleWithRipple({
        buttonId: 'theme-mode-toggle-button',
        getTheme: () => mode,
        applyTheme: (theme) => setMode(theme),
        saveTheme: (theme) => localStorage.setItem('portfolio_mode', theme),
      });
    }
  }, [mode, setMode]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  const activeTheme = THEMES.find(t => t.key === currentTheme) || THEMES[0];

  return (
    <div className="tp-container" ref={panelRef}>
      {/* Persistent Mode Toggle */}
      <div className="tp-mode-wrapper">
        <button
          id="theme-mode-toggle-button"
          data-mode-toggle
          className="tp-floating-mode"
          aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
        >
          {mode === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <span className="tp-mode-label">{mode === 'dark' ? 'Dark mode' : 'Light mode'}</span>
      </div>

      {/* Trigger button */}
      <button
        className={`tp-trigger ${open ? 'tp-trigger-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Open theme settings"
        title="Customize theme"
      >
        <i className={`fas ${activeTheme.icon}`} />
        <span className="tp-trigger-label">{activeTheme.label}</span>
        <svg className={`tp-chevron ${open ? 'tp-chevron-up' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div className="tp-panel">
          {/* Section: Theme */}
          <div className="tp-section">
            <div className="tp-section-title">Theme</div>
            <div className="tp-theme-grid">
              {THEMES.map(t => (
                <button
                  key={t.key}
                  className={`tp-theme-btn ${currentTheme === t.key ? 'active' : ''}`}
                  onClick={() => { onThemeChange(t.key); setOpen(false); }}
                  aria-label={`Switch to ${t.label}`}
                >
                  <i className={`fas ${t.icon}`} />
                  <div className="tp-theme-info">
                    <span className="tp-theme-name">{t.label}</span>
                    <span className="tp-theme-desc">{t.desc}</span>
                  </div>
                  {currentTheme === t.key && (
                    <svg className="tp-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="tp-divider" />

          {/* Section: Color Palette */}
          <div className="tp-section">
            <div className="tp-section-title">Color Palette</div>
            <div className="tp-palette-grid">
              {Object.entries(palettes).map(([key, palette]) => (
                <button
                  key={key}
                  onClick={() => setAccent(key)}
                  className={`tp-palette-btn ${accent === key ? 'active' : ''}`}
                  aria-label={`Set ${palette.name} palette`}
                >
                  <span className="tp-palette-swatches">
                    {palette.colors.map((c, i) => (
                      <span key={i} className="tp-palette-swatch" style={{ backgroundColor: c }} />
                    ))}
                  </span>
                  <span className="tp-palette-name">{palette.name}</span>
                  {accent === key && (
                    <svg className="tp-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
