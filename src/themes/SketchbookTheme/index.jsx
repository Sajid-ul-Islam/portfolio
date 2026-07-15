import React from 'react';
import { useData } from '../../context/DataContext';

export default function SketchbookTheme() {
  const data = useData();

  return (
    <>
      {/* WARNING: This is auto-generated JSX. Check for any remaining JSX errors. */}



      <svg aria-hidden="true" width="0" height="0" className="pointer-events-none absolute">
        <filter id="sk-rough-1" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence type="fractalNoise" baseFrequency="0.019" numOctaves="4" seed="11" result="n"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="5.6" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
        </filter>
        <filter id="sk-rough-2" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence type="fractalNoise" baseFrequency="0.023" numOctaves="4" seed="19" result="n"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="6.4" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
        </filter>
        <filter id="sk-rough-text" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="7" result="n"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
        </filter>
      </svg>


      <div className="sk-grain" aria-hidden="true"></div>


      <nav className="relative z-50 flex items-center justify-center px-4 py-4 lg:py-8 border-b border-[var(--border-color)] bg-[var(--bg)]/90 backdrop-blur-md sticky top-0">
        <div className="flex w-full max-w-6xl items-center justify-between gap-4">
          <span className="flex items-center font-mono text-xl font-bold tracking-wider">
            <a href="/" className="sk-text text-[var(--fg)] hover:text-[var(--accent)] transition-colors">SAJID ISLAM</a>
          </span>


          <div className="hidden items-center gap-8 lg:flex font-mono text-xs font-medium uppercase tracking-wider">
            <a href="#about" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Home</a>
            <a href="#experience" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Experience</a>
            <a href="#projects" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Projects</a>
            <a href="#skills" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Skills</a>
            <a href="#education" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Education</a>
          </div>


          <div className="flex items-center gap-3">

            <div className="hidden sm:flex items-center gap-1.5 mx-2">
              <button className="color-swatch rounded-full w-4 h-4 bg-[#22c55e] border-0 cursor-pointer transition-transform hover:scale-110" data-color="green" title="Green"></button>
              <button className="color-swatch rounded-full w-4 h-4 bg-[#f97316] border-0 cursor-pointer transition-transform hover:scale-110" data-color="orange" title="Orange"></button>
              <button className="color-swatch rounded-full w-4 h-4 bg-[#eab308] border-0 cursor-pointer transition-transform hover:scale-110" data-color="yellow" title="Yellow"></button>
              <button className="color-swatch rounded-full w-4 h-4 bg-[#3b82f6] border-0 cursor-pointer transition-transform hover:scale-110" data-color="blue" title="Blue"></button>
              <button className="color-swatch rounded-full w-4 h-4 bg-[#ef4444] border-0 cursor-pointer transition-transform hover:scale-110" data-color="red" title="Red"></button>
            </div>


            <button type="button" id="themeToggle" aria-label="Switch theme" className="inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-500/10 text-[var(--fg-dim)] transition-colors hover:bg-neutral-500/20 hover:text-[var(--fg)]">
              <i className="fas fa-moon" id="themeToggleIcon"></i>
            </button>


            <div className="relative group">
              <button className="font-mono text-xs tracking-wider uppercase text-[var(--fg)] border border-[var(--ink)] px-4 py-2 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors flex items-center gap-2 rounded-lg btn-sketch">
                <i className="fas fa-layer-group"></i> THEMES
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-[var(--bg)] border border-[var(--ink)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col z-50 shadow-lg rounded-lg overflow-hidden">
                <a href="theme-tactical.html" className="px-4 py-3 text-xs font-mono text-[var(--fg)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"><i className="fas fa-terminal w-5"></i> Tactical HUD</a>
                <a href="theme-ironforge.html" className="px-4 py-3 text-xs font-mono text-[var(--fg)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"><i className="fas fa-fire w-5"></i> Ironforge Studio</a>
                <a href="theme-sketchbook.html" className="px-4 py-3 text-xs font-mono text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"><i className="fas fa-pen-nib w-5"></i> Sketchbook Ink</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1">
        <main className="relative focus:outline-none">


          <section className="relative py-12 md:py-24 mx-auto max-w-4xl px-4 sm:px-6" id="about">

            <div className="sk-ink sk-draw-v pointer-events-none absolute inset-y-16 -left-12 hidden w-px lg:block" aria-hidden="true" ></div>
            <div className="sk-ink sk-draw-h pointer-events-none absolute top-16 -left-12 hidden h-px w-10 lg:block" aria-hidden="true" ></div>
            <div className="sk-ink sk-draw-h pointer-events-none absolute bottom-16 -left-12 hidden h-px w-10 lg:block" aria-hidden="true" ></div>

            <div className="sk-ink sk-draw-v pointer-events-none absolute inset-y-16 -right-12 hidden w-px lg:block" aria-hidden="true" ></div>
            <div className="sk-ink sk-draw-h pointer-events-none absolute top-16 -right-12 hidden h-px w-10 lg:block" aria-hidden="true" ></div>
            <div className="sk-ink sk-draw-h pointer-events-none absolute bottom-16 -right-12 hidden h-px w-10 lg:block" aria-hidden="true" ></div>

            <div className="flex flex-col items-center text-center">

              <div className="sk-box sk-draw-box rounded-2xl p-1 mb-6" >
                <img src={data.info.photo} alt={data.info.name} className="size-28 rounded-xl object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" />
              </div>


              <div className="font-hand text-5xl md:text-6xl text-[var(--fg)] tracking-wide mb-2 sk-text select-none animate-pulse owner-name">
                {data.info.name}
              </div>

              <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.15] font-normal text-balance">
                I engineer <s className="text-[var(--muted)] decoration-[0.05em]">raw data</s><br />
                <em className="text-[var(--accent)] font-serif italic">decisions</em> that scale.
              </h1>

              <p className="mt-6 max-w-xl text-base text-[var(--fg-dim)] sm:text-lg leading-relaxed" id="hero-text" dangerouslySetInnerHTML={{ __html: data.info.heroText.replace('Python, SQL, Power BI', '<strong class="font-semibold text-[var(--fg)]">Python, SQL, Power BI</strong>').replace('agentic workflows', '<strong class="font-semibold text-[var(--accent)]">agentic workflows</strong>') }} />


              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="resume.html" target="_blank" className="px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-[var(--fg)] border border-[var(--ink)] rounded-full hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all btn-sketch">
                  <i className="fas fa-file-pdf mr-2"></i> Download Resume
                </a>
                <a href={`mailto:${data.info.email}`} className="px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-[var(--bg)] bg-[var(--fg)] border border-[var(--fg)] rounded-full hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--bg)] transition-all">
                  <i className="fas fa-paper-plane mr-2"></i> Let's Connect
                </a>
              </div>


              <ul className="mt-8 flex items-center gap-4">
                <li>
                  <a href="https://github.com/Sajid-ul-Islam" target="_blank" rel="noopener" className="inline-flex size-10 items-center justify-center rounded-full bg-neutral-500/10 text-[var(--fg-dim)] transition-colors hover:bg-neutral-500/20 hover:text-[var(--accent)]" title="GitHub">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="size-5"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sajidislamchowdhury/" target="_blank" rel="noopener" className="inline-flex size-10 items-center justify-center rounded-full bg-neutral-500/10 text-[var(--fg-dim)] transition-colors hover:bg-neutral-500/20 hover:text-[var(--accent)]" title="LinkedIn">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="size-5"><path d="M6.94 8.5v10.56H3.42V8.5h3.52ZM7.17 5.18a1.83 1.83 0 0 1-1.98 1.83h-.02a1.83 1.83 0 1 1 .04-3.66 1.83 1.83 0 0 1 1.96 1.83Zm5.34 4.9c.47-.73 1.3-1.76 3.17-1.76 2.31 0 4.05 1.51 4.05 4.77v5.97h-3.52v-5.56c0-1.42-.51-2.4-1.79-2.4-.97 0-1.55.66-1.81 1.29-.09.23-.11.55-.11.87v5.8H9.02s.05-9.41 0-10.38h3.5v1.4Z"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.kaggle.com/saajiidi" target="_blank" rel="noopener" className="inline-flex size-10 items-center justify-center rounded-full bg-neutral-500/10 text-[var(--fg-dim)] transition-colors hover:bg-neutral-500/20 hover:text-[var(--accent)]" title="Kaggle">
                    <i className="fab fa-kaggle text-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>


          <section className="sk-rule-t sk-rule-b py-12 bg-neutral-500/5 overflow-hidden" id="stats">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="sk-rule-l-md pl-6 md:first:border-none">
                  <h3 className="font-hand text-5xl text-[var(--accent)] font-bold mb-1">4+</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Years Experience</p>
                </div>
                <div className="sk-rule-l-md pl-6">
                  <h3 className="font-hand text-5xl text-[var(--fg)] font-bold mb-1">15+</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Completed Projects</p>
                </div>
                <div className="sk-rule-l-md pl-6">
                  <h3 className="font-hand text-5xl text-[var(--fg)] font-bold mb-1">3+</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Research Papers</p>
                </div>
                <div className="sk-rule-l-md pl-6">
                  <h3 className="font-hand text-5xl text-[var(--fg)] font-bold mb-1">10+</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Certifications</p>
                </div>
              </div>
            </div>
          </section>


          <section className="relative py-16 md:py-24 mx-auto max-w-4xl px-4 sm:px-6" id="experience">
            <div className="grid md:grid-cols-3 gap-8">

              <div className="md:col-span-1">
                <span className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">// Career Journey</span>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl font-normal leading-tight">Work<br />Experience</h2>
                <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
                  Consistently transforming businesses by engineering automation workflows, standardizing KPI dashboards, and designing analytics pipelines.
                </p>
              </div>

              <div className="md:col-span-2 space-y-12" id="experience-container">
                {data.experiences.map((exp, index) => (
                  <div key={exp.id || index} className="relative pl-8 border-l-2 border-[var(--ink)]">
                    <div className={`absolute -left-2.5 top-1.5 size-4 rounded-full bg-[var(--bg)] border-2 ${index === 0 ? 'border-[var(--accent)]' : 'border-[var(--ink)]'} flex items-center justify-center`}>
                      <span className={`size-1.5 rounded-full ${index === 0 ? 'bg-[var(--accent)]' : 'bg-[var(--fg)]'}`}></span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-serif text-2xl font-normal text-[var(--fg)]">{exp.title}</h3>
                      <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mt-1 sm:mt-0">{exp.startDate} {exp.current ? '- Present' : ''}</span>
                    </div>
                    <p className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest mt-1">{exp.company}</p>
                    <ul className="mt-4 space-y-2 text-sm text-[var(--fg-dim)] list-disc pl-4 leading-relaxed">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: highlight }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>


          <section className="sk-rule-t py-16 md:py-24 bg-neutral-500/5" id="projects">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-12">
                <div>
                  <span className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">// Portfolio Showcase</span>
                  <h2 className="mt-3 font-serif text-3xl md:text-4xl font-normal">Featured Works</h2>
                </div>
                <a href="https://github.com/Sajid-ul-Islam" target="_blank" className="font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)] uppercase tracking-wider transition-colors">
                  All Repositories →
                </a>
              </div>


              <div className="grid gap-6 sm:grid-cols-2" id="projects-container">
                {data.projects.map((proj, idx) => (
                  <div key={proj.id || idx} className="sk-box rounded-xl p-6 bg-[var(--bg)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-serif text-2xl font-normal text-[var(--fg)] hover:text-[var(--accent)] transition-colors">{proj.title}</h3>
                        <span className="font-mono text-[9px] uppercase px-2 py-0.5 border border-[var(--ink-faint)] rounded-full text-[var(--muted)]">{proj.category}</span>
                      </div>
                      <p className="mt-3 text-sm text-[var(--fg-dim)] leading-relaxed">{proj.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {(proj.technologies || []).map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-neutral-500/10 rounded font-mono text-[10px] text-[var(--fg-dim)]">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <a href={proj.liveUrl || proj.githubUrl || '#'} target="_blank" className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors">
                      View Project <i className={`fas fa-arrow-right text-[10px]`}></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>


          <section className="relative py-16 md:py-24 mx-auto max-w-4xl px-4 sm:px-6" id="skills">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <span className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">// Technical Arsenal</span>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl font-normal">Core Skills</h2>
                <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
                  A carefully developed stack geared towards scripting operational solutions, data classification, and structured dashboard viz.
                </p>
              </div>

              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-4" id="skills-grid">
                  {data.skillGroups.flatMap(group => group.skills).slice(0, 10).map((skill, idx) => (
                    <div key={skill.id || idx} className="sk-card rounded-xl p-4 flex items-center gap-4 bg-[var(--bg)]">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-500/10 text-[var(--accent)] overflow-hidden">
                        {skill.icon && skill.icon.startsWith('http') ? <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" /> : <i className={`${skill.icon || 'fas fa-star'} text-xl`}></i>}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-normal">{skill.name}</h4>
                        <p className="font-mono text-[9px] text-[var(--muted)]">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>


          <section className="sk-rule-t py-16 md:py-24 bg-neutral-500/5" id="education">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <span className="font-mono text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">// Credentials</span>
                  <h2 className="mt-3 font-serif text-3xl md:text-4xl font-normal">Education</h2>
                  <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
                    Academic credentials and specialized business analytics degrees.
                  </p>
                </div>

                <div className="md:col-span-2 space-y-6" id="education-container">
                  {data.education.map((edu, idx) => (
                    <div key={edu.id || idx} className="sk-box rounded-xl p-6 bg-[var(--bg)]">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-500/10 text-[var(--accent)] shrink-0">
                          <i className="fas fa-graduation-cap text-lg"></i>
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-normal text-[var(--fg)]">{edu.degree}</h3>
                          <p className="text-sm text-[var(--fg-dim)] mt-1">{edu.institution}</p>
                          <div className="flex items-center gap-3 mt-2 text-xs font-mono text-[var(--muted)]">
                            <span>Graduated: {edu.date}</span>
                            <span>•</span>
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>


      <footer className="sk-rule-t mt-16 flex justify-center bg-neutral-500/5">
        <div className="flex w-full max-w-4xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs sm:flex-row font-mono text-[var(--muted)]">
          <p className="uppercase tracking-wider">© 2026 SAJID-UL-ISLAM</p>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="mailto:sajid.islam.chowdhury@gmail.com" className="hover:text-[var(--accent)] transition-colors">Email</a>
            <a href="https://wa.me/+8801824526054" target="_blank" className="hover:text-[var(--accent)] transition-colors">WhatsApp</a>
            <a href="resume.html" target="_blank" className="hover:text-[var(--accent)] transition-colors">Resume</a>
          </div>
        </div>
      </footer>




    </>
  );
}
