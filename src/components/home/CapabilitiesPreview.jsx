import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import { capabilities } from '../../data/capabilities.js';

export default function CapabilitiesPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink-2 py-24 lg:py-36" aria-labelledby="cap-title">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionLabel index="02">Core Capabilities</SectionLabel>
            <h2 id="cap-title" className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold uppercase leading-[0.95] text-white">
              Eight disciplines. One integrated approach.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md">
            <p className="leading-relaxed text-mist">
              From strategy and requirements through budgeting and acquisition, our analysts connect the processes that turn
              defense priorities into fielded capability.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 4) * 0.07} className="bg-ink-2">
              <Link
                to={`/capabilities#${c.slug}`}
                className="group relative flex h-full min-h-[300px] flex-col overflow-hidden p-7 transition-colors duration-500 hover:bg-navy/60 lg:p-8"
              >
                <span
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-slate transition-colors group-hover:text-mist">
                    {String(i + 1).padStart(2, '0')} / {c.code}
                  </span>
                  <c.icon className="h-6 w-6 text-mist transition-all duration-500 group-hover:-rotate-6 group-hover:text-white" strokeWidth={1.4} />
                </div>
                <h3 className="mt-auto pt-14 font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{c.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fog opacity-60 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <Button to="/capabilities" variant="outline">View All Capabilities</Button>
        </Reveal>
      </div>
    </section>
  );
}
