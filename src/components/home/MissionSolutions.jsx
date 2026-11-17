import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import { photos } from '../../data/photos.js';

// Mission areas group MDB Group's published service lines; imagery is representative only.
const missions = [
  {
    id: 'modernization',
    title: 'Force Modernization',
    tag: 'Requirements → Capability',
    body: 'Requirements analysis and materiel development support that integrates JCIDS, PPBE and the Defense Acquisition System — helping leaders field the right capability at the right time.',
    points: ['Capabilities integration & analysis', 'Materiel development support', 'Force management education'],
    photo: photos.leaders,
  },
  {
    id: 'resourcing',
    title: 'Resource Management',
    tag: 'PPBE · Budget Execution',
    body: 'Program analysis for budget execution and milestone reviews, plus manpower costing and affordability assessments built on authoritative DoD data.',
    points: ['Program & budget analysis', 'Manpower costing & affordability', 'Milestone review preparation'],
    photo: photos.toc,
  },
  {
    id: 'planning',
    title: 'Operational Planning',
    tag: 'Strategy · Concepts · Plans',
    body: 'Analysis of future warfighting concepts aligned with the National Military Strategy, translated into the plans, programs and system requirements that support them.',
    points: ['Future concepts analysis', 'Strategic & operational plans', 'Workforce & manpower planning'],
    photo: photos.commandPost,
  },
  {
    id: 'sustainment',
    title: 'Supply & Value Chain',
    tag: 'GSA SIN 541614SVC',
    body: 'Supply and value chain management support available through the GSA Multiple Award Schedule, aligning sustainment planning with program and budget decisions.',
    points: ['Supply chain analysis', 'Life-cycle program support', 'Available via GSA MAS'],
    photo: photos.logistics,
  },
];

export default function MissionSolutions() {
  const [active, setActive] = useState(0);
  const m = missions[active];

  return (
    <section className="relative border-t border-white/10 bg-ink py-24 lg:py-36" aria-labelledby="mission-title">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel index="03">Mission-Focused Solutions</SectionLabel>
          <h2 id="mission-title" className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold uppercase leading-[0.95] text-white">
            Built around the problems commanders and program offices face.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Selector */}
          <div className="lg:col-span-5" role="tablist" aria-label="Mission areas" aria-orientation="vertical">
            {missions.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                      e.preventDefault();
                      const next = (i + (e.key === 'ArrowDown' ? 1 : -1) + missions.length) % missions.length;
                      setActive(next);
                      document.getElementById(`tab-${missions[next].id}`)?.focus();
                    }
                  }}
                  className={`group relative block w-full border-b border-white/10 py-6 text-left transition-colors duration-300 first:border-t ${
                    selected ? 'text-white' : 'text-slate hover:text-fog'
                  }`}
                >
                  <span
                    className={`absolute -left-px top-0 h-full w-px bg-white transition-transform duration-500 ${selected ? 'scale-y-100' : 'scale-y-0'}`}
                    aria-hidden="true"
                  />
                  <span className="flex items-baseline gap-5 pl-5">
                    <span className="font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">{item.title}</span>
                  </span>
                  <span className={`mt-1 block pl-14 font-mono text-[10px] uppercase tracking-[0.22em] ${selected ? 'text-mist' : 'text-slate/70'}`}>
                    {item.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy sm:aspect-[16/11]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={m.id}
                  src={m.photo.src}
                  srcSet={`${m.photo.srcSm} 1000w, ${m.photo.src} 2400w`}
                  sizes="(min-width:1024px) 55vw, 100vw"
                  alt={m.photo.alt}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
                  className="photo-grade absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" aria-hidden="true" />
              <p className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">
                {m.photo.credit} · Representative imagery
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={m.id}
                  id={`panel-${m.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${m.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-x-0 bottom-0 p-6 sm:p-10"
                >
                  <p className="max-w-xl text-sm leading-relaxed text-fog sm:text-base">{m.body}</p>
                  <ul className="mt-6 hidden flex-wrap gap-2 sm:flex">
                    {m.points.map((p) => (
                      <li key={p} className="border border-white/20 bg-ink/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-fog backdrop-blur">
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/capabilities">See How We Support</Button>
              <Button to="/contact" variant="outline">Discuss a Requirement</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
