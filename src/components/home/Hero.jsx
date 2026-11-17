import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button.jsx';
import { photos } from '../../data/photos.js';
import { company } from '../../data/company.js';
import symbolWhite from '../../assets/brand/mdb-symbol-white.png';

const ease = [0.2, 0.7, 0.2, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const markY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink" aria-labelledby="hero-title">
      {/* Background photo with slow parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 -z-20">
        <motion.img
          src={photos.hero.src}
          srcSet={`${photos.hero.srcSm} 1000w, ${photos.hero.src} 2400w`}
          sizes="100vw"
          alt={photos.hero.alt}
          fetchpriority="high"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
          className="h-full w-full object-cover object-[70%_center]"
          style={{ filter: 'grayscale(0.35) contrast(1.12) brightness(0.95)' }}
        />
      </motion.div>
      {/* Steel-blue color grade + legibility gradients */}
      <div className="absolute inset-0 -z-10 bg-[#294A61] opacity-70 mix-blend-color" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,16,22,0.88)_0%,rgba(10,16,22,0.45)_45%,rgba(10,16,22,0.05)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,16,22,0.55)_0%,transparent_28%,transparent_55%,#0A1016_100%)]" />
      <div className="tech-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      {/* Oversized official MDB symbol, kept faint behind the headline */}
      <motion.div
        style={{ y: markY }}
        className="pointer-events-none absolute inset-x-0 top-[18%] -z-10 flex select-none justify-center sm:top-[13%]"
        aria-hidden="true"
      >
        <img src={symbolWhite} alt="" width="396" height="210" className="w-[78vw] max-w-[1100px] opacity-[0.07] sm:w-[52vw]" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-28 pt-36 sm:px-8 lg:pb-28">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.28em] text-fog"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse bg-white" aria-hidden="true" />
                Service-Disabled Veteran-Owned
              </span>
              <span className="hidden text-slate sm:inline">/</span>
              <span className="hidden sm:inline">Defense Management Consulting</span>
            </motion.p>

            <h1 id="hero-title" className="mt-6 font-display font-bold uppercase leading-[0.92] tracking-[-0.005em] text-white">
              {['Supporting the Mission.', 'Strengthening the Force.'].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className={`block text-[clamp(2.5rem,7.2vw,6.4rem)] ${i === 1 ? 'text-fog/70' : ''}`}
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.45 + i * 0.15, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease }}
              className="mt-7 max-w-xl text-base leading-relaxed text-fog/85 sm:text-lg"
            >
              Strategic planning, acquisition management, financial expertise, and operational support for the missions that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button to="/capabilities">Explore Capabilities</Button>
              <Button to="/about" variant="outline">About MDB Group</Button>
            </motion.div>
          </div>

          {/* Floating credential card */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.3, ease }}
            className="brackets hidden border border-white/15 bg-ink/55 p-6 backdrop-blur-md lg:col-span-3 lg:ml-auto lg:block lg:w-full lg:max-w-xs"
            aria-label="Company at a glance"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Since {company.founded}</p>
            <p className="mt-3 font-display text-6xl font-bold leading-none text-white">
              {new Date().getFullYear() - company.founded}
              <span className="ml-1 text-3xl text-mist">yrs</span>
            </p>
            <p className="mt-2 text-sm text-fog/80">Supporting Army and DoD leadership with analytical and management expertise.</p>
            <div className="mt-5 grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 pt-px">
              <Stat value={company.clearedStaff} label="Cleared professionals" />
              <Stat value="SDVOSB" label="SBA certified" />
            </div>
          </motion.aside>
        </div>
      </motion.div>

      <p className="absolute bottom-16 right-5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 sm:right-8">
        {photos.hero.credit}<span className="hidden sm:inline"> · Representative imagery</span>
      </p>

      {/* Bottom rail */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-ink/40 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-6 px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-mist sm:px-8">
          <span className="hidden sm:inline">HQ · Lorton, Virginia</span>
          <a href="#overview" className="group inline-flex items-center gap-2 text-fog hover:text-white">
            Scroll
            <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          </a>
          <span className="hidden md:inline">CAGE 4BWN9 · NAICS 541611</span>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-ink/80 px-1 py-3 first:pr-3 last:pl-3">
      <p className="font-display text-2xl font-bold text-white">{value}</p>
      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-mist">{label}</p>
    </div>
  );
}
