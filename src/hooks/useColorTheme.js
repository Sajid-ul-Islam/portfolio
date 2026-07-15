import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Color palette presets – each defines a coordinated multi-color scheme.
 * The first color is the primary accent; additional colors are shown
 * as a second swatch in the palette card for a richer preview.
 */
const PALETTES = {
  neon: {
    name: 'Neon',
    colors: ['#22c55e', '#a855f7'],
    primary:   '#22c55e',
    secondary: '#a855f7',
    light:     '#4ade80',
    dim:       '#166534',
    text:      '#86efac',
    glow:      'rgba(34,197,94,0.4)',
  },
  ember: {
    name: 'Ember',
    colors: ['#f97316', '#ef4444'],
    primary:   '#f97316',
    secondary: '#ef4444',
    light:     '#fb923c',
    dim:       '#c2410c',
    text:      '#fdba74',
    glow:      'rgba(249,115,22,0.4)',
  },
  ocean: {
    name: 'Ocean',
    colors: ['#3b82f6', '#14b8a6'],
    primary:   '#3b82f6',
    secondary: '#14b8a6',
    light:     '#60a5fa',
    dim:       '#1d4ed8',
    text:      '#93c5fd',
    glow:      'rgba(59,130,246,0.4)',
  },
  royal: {
    name: 'Royal',
    colors: ['#8b5cf6', '#eab308'],
    primary:   '#8b5cf6',
    secondary: '#eab308',
    light:     '#a78bfa',
    dim:       '#6d28d9',
    text:      '#c4b5fd',
    glow:      'rgba(139,92,246,0.4)',
  },
  rose: {
    name: 'Rose',
    colors: ['#ec4899', '#f43f5e'],
    primary:   '#ec4899',
    secondary: '#f43f5e',
    light:     '#f472b6',
    dim:       '#be185d',
    text:      '#f9a8d4',
    glow:      'rgba(236,72,153,0.4)',
  },
  mint: {
    name: 'Mint',
    colors: ['#10b981', '#34d399'],
    primary:   '#10b981',
    secondary: '#34d399',
    light:     '#34d399',
    dim:       '#047857',
    text:      '#6ee7b7',
    glow:      'rgba(16,185,129,0.4)',
  },
  aurora: {
    name: 'Aurora',
    colors: ['#06b6d4', '#ec4899'],
    primary:   '#06b6d4',
    secondary: '#ec4899',
    light:     '#22d3ee',
    dim:       '#0891b2',
    text:      '#67e8f9',
    glow:      'rgba(6,182,212,0.4)',
  },
  sunset: {
    name: 'Sunset',
    colors: ['#f97316', '#8b5cf6'],
    primary:   '#f97316',
    secondary: '#8b5cf6',
    light:     '#fb923c',
    dim:       '#ea580c',
    text:      '#fdba74',
    glow:      'rgba(249,115,22,0.4)',
  },
  forest: {
    name: 'Forest',
    colors: ['#059669', '#65a30d'],
    primary:   '#059669',
    secondary: '#65a30d',
    light:     '#34d399',
    dim:       '#047857',
    text:      '#6ee7b7',
    glow:      'rgba(5,150,105,0.4)',
  },
  frost: {
    name: 'Frost',
    colors: ['#06b6d4', '#94a3b8'],
    primary:   '#06b6d4',
    secondary: '#94a3b8',
    light:     '#22d3ee',
    dim:       '#0891b2',
    text:      '#67e8f9',
    glow:      'rgba(6,182,212,0.4)',
  },
};

export function useColorTheme() {
  const [mode, setMode] = useState(() =>
    localStorage.getItem('portfolio_mode') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  const [accent, setAccent] = useState(() => {
    const stored = localStorage.getItem('portfolio_accent');
    // Migrate old single-color keys to new palette presets
    const legacyMap = { green: 'neon', orange: 'ember', blue: 'ocean', yellow: 'royal', red: 'rose', pink: 'rose', purple: 'royal', teal: 'ocean' };
    return legacyMap[stored] || stored || 'neon';
  });

  const transitionTimer = useRef(null);

  /**
   * Temporarily add .theme-transitioning to enable smooth CSS transitions
   * on background/color/border changes. Removed after the transition completes.
   * Clears any pending timer so rapid clicks don't cut transitions short.
   */
  const triggerSmoothTransition = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    root.classList.add('theme-transitioning');
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => root.classList.remove('theme-transitioning'), 420);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('portfolio_mode', mode);
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('portfolio_accent', accent);
  }, [accent]);

  const toggleMode = useCallback(() => {
    const next = mode === 'dark' ? 'light' : 'dark';

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduced) {
      triggerSmoothTransition();
      setMode(next);
      return;
    }

    // View transition (water drop) — already animated, no need for CSS transitions
    const btn = document.querySelector('[data-mode-toggle]');
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const cx = Math.round(rect.left + rect.width / 2);
      const cy = Math.round(rect.top + rect.height / 2);
      document.documentElement.style.setProperty('--ripple-x', `${cx}px`);
      document.documentElement.style.setProperty('--ripple-y', `${cy}px`);
    }

    const t = document.startViewTransition(() => setMode(next));
    t.ready.catch(() => {});
  }, [mode, triggerSmoothTransition]);

  const changeAccent = useCallback((newAccent) => {
    triggerSmoothTransition();
    setAccent(newAccent);
  }, [triggerSmoothTransition]);

  const activePalette = PALETTES[accent];

  return { mode, toggleMode, accent, setAccent: changeAccent, palettes: PALETTES, activePalette };
}
