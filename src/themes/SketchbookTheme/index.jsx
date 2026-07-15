import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useData } from '../../context/DataContext';

export default function SketchbookTheme() {
  const data = useData();
  const toggleBtnRef = useRef(null);
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('portfolio_mode') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  // Apply theme immediately on change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_mode', theme);
  }, [theme]);

  // ── Self-contained teardrop ripple toggle ──────────────────────────────
  const handleToggle = useCallback(() => {
    const btn = toggleBtnRef.current;
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    // Fallback: no View Transitions API or reduced-motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduced) {
      setTheme(nextTheme);
      return;
    }

    // Set ripple origin from the toggle button's center position
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const cx = Math.round(rect.left + rect.width / 2);
      const cy = Math.round(rect.top  + rect.height / 2);
      document.documentElement.style.setProperty('--ripple-x', `${cx}px`);
      document.documentElement.style.setProperty('--ripple-y', `${cy}px`);
    }

    // Kick off the View Transition — the CSS `::view-transition-new(root)`
    // rule picks up --ripple-x/y and plays the ellipse clip-path reveal.
    const t = document.startViewTransition(() => {
      setTheme(nextTheme);
    });
    t.ready.catch(() => {}); // suppress AbortError on rapid clicks
  }, [theme]);

  const socialLinks = [
    { href: data.info.github, icon: 'fab fa-github', label: 'GitHub' },
    { href: data.info.linkedin, icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { href: data.info.kaggle, icon: 'fab fa-kaggle', label: 'Kaggle' },
    { href: `mailto:${data.info.email}`, icon: 'fas fa-envelope', label: 'Email' },
  ].filter(l => l.href);

  return (
    <>
      {/* ── SVG Filter Definitions ─────────────────────────────────── */}
      <svg aria-hidden="true" width="0" height="0" className="pointer-events-none absolute">
        <defs>
          <filter id="sk-rough-1" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.019" numOctaves="4" seed="11" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="5.6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="sk-rough-2" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.023" numOctaves="4" seed="19" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="6.4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="sk-rough-text" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          {/* Liquid warp for theme transition */}
          <filter id="theme-water-warp" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="5" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="18" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Grain overlay */}
      <div className="sk-grain" aria-hidden="true" />

      {/* ── Navigation ───────────────────────────────────────────────── */}
      <nav className="relative flex items-center justify-center px-4 py-4 lg:py-10">
        <div className="flex w-full max-w-[1068px] items-center justify-between gap-4">
          {/* Brand */}
          <span className="flex items-center font-mono text-xl leading-8">
            <a href="#" className="sk-text text-[var(--text-color-strong)] opacity-90 hover:opacity-100 transition-opacity">
              {data.info.name}
            </a>
          </span>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            {[
              { href: '#about',     label: 'Home' },
              { href: '#experience',label: 'Experience' },
              { href: '#projects',  label: 'Projects' },
              { href: '#skills',    label: 'Skills' },
              { href: '#education', label: 'Education' },
            ].map(({ href, label }) => (
              <a key={href} href={href}
                className="font-mono text-xs font-medium tracking-wider uppercase text-[var(--text-color-muted)] hover:text-[var(--text-color-strong)] transition-colors">
                {label}
              </a>
            ))}
          </div>

          {/* Right: theme toggle + CTA */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="themeToggle"
              aria-label="Switch theme"
              className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-500/10 text-[var(--text-color-muted)] transition-colors hover:bg-neutral-500/20 hover:text-[var(--text-color-strong)]"
            >
              {/* Sun — show in dark mode */}
              <svg className={`size-4 ${theme === 'dark' ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" />
              </svg>
              {/* Moon — show in light mode */}
              <svg className={`size-4 ${theme === 'light' ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" />
              </svg>
            </button>

            <div className="hidden items-center gap-2 lg:flex">
              <a href={`mailto:${data.info.email}`} className="shamim-btn shamim-btn-neutral">Email</a>
              <a href={data.info.linkedin} target="_blank" rel="noopener" className="shamim-btn shamim-btn-filled">LinkedIn</a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <div className="flex-1">
        <main className="relative focus:outline-none" style={{ fontFamily: 'var(--font-sans)' }}>

          {/* ── HERO ─────────────────────────────────────────────────── */}
          <section id="about" className="sk-hero relative py-10 sm:py-16">
            {/* Corner bracket hairlines */}
            <div className="sk-ink sk-draw-v pointer-events-none absolute inset-y-16 -left-24 hidden w-px lg:block" style={{ '--sk-draw-delay': '0.3s' }} aria-hidden="true" />
            <div className="sk-ink sk-draw-h pointer-events-none absolute top-16 -left-24 hidden h-px w-10 lg:block" style={{ '--sk-draw-delay': '1.1s' }} aria-hidden="true" />
            <div className="sk-ink sk-draw-h pointer-events-none absolute bottom-16 -left-24 hidden h-px w-10 lg:block" style={{ '--sk-draw-delay': '1.2s' }} aria-hidden="true" />
            <div className="sk-ink sk-draw-v pointer-events-none absolute inset-y-16 -right-24 hidden w-px lg:block" style={{ '--sk-draw-delay': '0.5s' }} aria-hidden="true" />
            <div className="sk-ink sk-draw-h pointer-events-none absolute top-16 -right-24 hidden h-px w-10 lg:block" style={{ '--sk-draw-delay': '1.3s' }} aria-hidden="true" />
            <div className="sk-ink sk-draw-h pointer-events-none absolute bottom-16 -right-24 hidden h-px w-10 lg:block" style={{ '--sk-draw-delay': '1.4s' }} aria-hidden="true" />

            <div className="mx-auto max-w-prose px-4 sm:px-6">
              <div className="flex flex-col items-center text-center">

                {/* Avatar with drawing border animation */}
                <div className="sk-box sk-draw-box rounded-2xl p-1" style={{ '--sk-draw-delay': '0s' }}>
                  <img
                    src={data.info.photo || 'img/profile.jpg'}
                    alt={data.info.name}
                    width="80" height="80"
                    loading="eager"
                    decoding="async"
                    className="size-20 rounded-xl object-cover"
                    style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  />
                </div>

                {/* Handwritten-style name — animated SVG */}
                <HandwrittenName name={data.info.name} />

                {/* Hero headline — Instrument Serif, mixed styles */}
                <h1 className="sk-hero-title mt-6 text-balance"
                  style={{
                    fontFamily: 'Instrument Serif, Georgia, serif',
                    fontSize: 'clamp(2rem, 6vw, 3rem)',
                    lineHeight: 1.1,
                    color: 'var(--text-color-strong)',
                    animationDelay: '1.2s'
                  }}>
                  I turn{' '}
                  <span style={{ textDecoration: 'line-through', opacity: 0.5 }}>raw numbers</span>
                  <br />
                  <em style={{ fontStyle: 'italic' }}>decisions</em>{' '}
                  that scale.
                </h1>

                {/* Bio */}
                <p className="sk-hero-bio mt-6 max-w-xl leading-relaxed"
                  style={{
                    fontFamily: 'Inter, ui-sans-serif, sans-serif',
                    fontSize: '1rem',
                    color: 'var(--text-color-body)',
                    animationDelay: '1.5s'
                  }}>
                  {data.info.role} — specialized in turning complex datasets into strategic growth.
                  Based in Bangladesh, leading data-ops at{' '}
                  <strong style={{ color: 'var(--text-color-strong)' }}>DEEN Commerce</strong>{' '}
                  and previously at{' '}
                  <strong style={{ color: 'var(--text-color-strong)' }}>Daraz (Alibaba Group)</strong>.
                </p>

                {/* Social links */}
                <div className="sk-hero-socials mt-6 flex items-center justify-center gap-3"
                  style={{ animationDelay: '1.8s' }}>
                  {socialLinks.map(({ href, icon, label }) => (
                    <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener"
                      aria-label={label}
                      className="inline-flex size-9 items-center justify-center rounded-full bg-neutral-500/10 text-[var(--text-color-muted)] hover:bg-neutral-500/20 hover:text-[var(--text-color-strong)] transition-colors">
                      <i className={`${icon} text-sm`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── REST OF PAGE ─────────────────────────────────────────── */}
          <div className="mx-auto max-w-prose px-4 sm:px-6">

            {/* Experience */}
            <div className="sk-rule-t sk-draw-rule" />
            <section id="experience" className="py-10 sm:py-12">
              <h2 className="sk-section-heading mb-4">Work experience</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-color-body)' }}>
                From data analysis at <strong style={{ color: 'var(--text-color-strong)' }}>Daraz (Alibaba Group)</strong> to
                leading business strategy at <strong style={{ color: 'var(--text-color-strong)' }}>Deen Commerce</strong>.
                I architect performance dashboards and agentic workflows that carry real scale.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-color-body)' }}>
                I'm currently{' '}
                <strong style={{ color: 'var(--text-color-strong)' }}>open to new opportunities</strong>{' '}
                —{' '}
                <a href={`mailto:${data.info.email}`}
                  className="underline underline-offset-2 transition-colors"
                  style={{ textDecorationColor: 'var(--text-color-muted)' }}>
                  get in touch
                </a>.
              </p>

              <div className="divide-y" style={{ borderColor: 'var(--border-color-base-muted)' }} id="experience-list">
                {data.experiences.map((exp, idx) => (
                  <div key={exp.id || idx} className="py-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="sk-item-title">{exp.title}</h3>
                        <div className="sk-item-meta" style={{ color: 'var(--accent-600)' }}>{exp.company}</div>
                      </div>
                      <div className="sk-item-date">{exp.startDate}{exp.current ? ' – Present' : ''}</div>
                    </div>
                    {exp.highlights?.length > 0 && (
                      <ul className="mt-3 space-y-1 pl-5 list-disc marker:text-[var(--text-color-muted)]">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="text-sm leading-snug" style={{ color: 'var(--text-color-body)' }}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <div className="sk-rule-t sk-draw-rule" />
            <section id="projects" className="py-10 sm:py-12">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="sk-section-heading">Projects</h2>
                <span className="font-mono text-xs tracking-wider uppercase" style={{ color: 'var(--text-color-muted)' }}>
                  ALL PROJECTS →
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4" id="projects-container">
                {data.projects.slice(0, 6).map((proj, idx) => (
                  <a key={proj.id || idx}
                    href={proj.liveUrl || proj.githubUrl || '#'}
                    target="_blank" rel="noopener"
                    className="sk-box rounded-xl p-5 block transition-colors group"
                    style={{ backgroundColor: 'var(--background-color-card)' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--background-color-card-hover)'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--background-color-card)'}>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-mono text-sm font-medium transition-colors"
                        style={{ color: 'var(--text-color-strong)' }}>
                        {proj.title}
                      </h3>
                      <span className="font-mono shrink-0" style={{ fontSize: 10, color: 'var(--text-color-muted)', textTransform: 'uppercase' }}>
                        {proj.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-snug" style={{ color: 'var(--text-color-body)' }}>
                      {proj.description}
                    </p>
                    {proj.technologies?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {proj.technologies.slice(0, 4).map((tech, i) => (
                          <span key={i} className="font-mono rounded px-1.5 py-0.5 bg-neutral-500/10"
                            style={{ fontSize: 10, color: 'var(--text-color-muted)' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </section>

            {/* Skills */}
            <div className="sk-rule-t sk-draw-rule" />
            <section id="skills" className="py-10 sm:py-12">
              <h2 className="sk-section-heading mb-6">Skills & Expertise</h2>
              <div className="space-y-6" id="skills-grid">
                {data.skillGroups.map((group, gIdx) => (
                  <div key={gIdx}>
                    <h3 className="font-mono text-xs tracking-wider uppercase mb-3"
                      style={{ color: 'var(--text-color-muted)' }}>{group.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => (
                        <span key={sIdx}
                          className="sk-box inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm"
                          style={{ color: 'var(--text-color-body)', backgroundColor: 'var(--background-color-card)' }}>
                          {skill.icon?.startsWith('http') ? (
                            <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain" />
                          ) : (
                            <i className={`${skill.icon || 'fas fa-star'} text-xs`} style={{ color: 'var(--accent-600)' }} />
                          )}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <div className="sk-rule-t sk-draw-rule" />
            <section id="education" className="py-10 sm:py-12">
              <h2 className="sk-section-heading mb-6">Education</h2>
              <div className="divide-y" style={{ borderColor: 'var(--border-color-base-muted)' }}>
                {data.education.map((edu, idx) => (
                  <div key={edu.id || idx} className="py-5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="sk-item-title">{edu.degree}</h3>
                        <div className="sk-item-meta">{edu.institution}</div>
                      </div>
                      <div className="sk-item-date">{edu.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <div className="sk-rule-t sk-draw-rule" />
            <footer className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-mono text-xs tracking-wider uppercase" style={{ color: 'var(--text-color-muted)' }}>
                © {new Date().getFullYear()} {data.info.name.toUpperCase()}
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ href, label }) => (
                  <a key={label} href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener"
                    className="font-mono text-xs tracking-wider uppercase transition-colors"
                    style={{ color: 'var(--text-color-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-color-strong)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-color-muted)'}>
                    {label}
                  </a>
                ))}
              </div>
            </footer>
          </div>

        </main>
      </div>
    </>
  );
}

/* ── Handwritten animated SVG name ─────────────────────────────────────────
   Mimics ahmedshamim.com's animated SVG signature: each letter strokes in
   via stroke-dashoffset, then the whole element fades to fill colour.
   We approximate "Sajid Islam" with a stylised display-font + clip animation.
──────────────────────────────────────────────────────────────────────────── */
function HandwrittenName({ name }) {
  return (
    <p
      className="sk-handwritten-name mt-2"
      aria-hidden="true"
      style={{
        fontFamily: 'Instrument Serif, Georgia, serif',
        fontStyle: 'italic',
        fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)',
        color: 'var(--text-color-muted)',
        letterSpacing: '0.04em',
        animationDelay: '0.8s',
        /* clip wipe from left to right — mimics the stroke-dash animation */
        clipPath: 'inset(0 100% 0 0)',
        animation: 'sk-name-reveal 1.4s cubic-bezier(0.33, 0, 0.15, 1) 0.8s forwards',
      }}>
      {name}
    </p>
  );
}
