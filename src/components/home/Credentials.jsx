import { ShieldCheck, Award, FileBadge, Building2 } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import { customers } from '../../data/company.js';

const differentiators = [
  {
    icon: Award,
    title: 'SBA-Certified SDVOSB & VOSB',
    body: 'A Service-Disabled Veteran-Owned Small Business that understands the mission from the inside.',
  },
  {
    icon: ShieldCheck,
    title: 'Cleared Workforce',
    body: 'More than 50 full-time professionals holding Secret, TS and TS/SCI clearances, supported by a facility security officer.',
  },
  {
    icon: Building2,
    title: 'Proven Prime Performance',
    body: 'Prime contractor to the Army G-8 Force Development Directorate since 2015, with successive awards in 2018 and 2021.',
  },
  {
    icon: FileBadge,
    title: 'Ready Contract Access',
    body: 'GSA Multiple Award Schedule holder, giving agencies a streamlined path to our consulting and training services.',
  },
];

export default function Credentials() {
  return (
    <section className="relative border-t border-white/10 bg-ink-2 py-24 lg:py-36" aria-labelledby="cred-title">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="04">Credentials &amp; Differentiators</SectionLabel>
              <h2 id="cred-title" className="mt-6 font-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold uppercase leading-[0.95] text-white">
                Trusted where the work is hardest.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 hidden lg:block">
              <div className="brackets relative grid aspect-square max-w-md place-items-center border border-white/10 bg-ink">
                <div className="tech-grid absolute inset-0" aria-hidden="true" />
                <div className="absolute inset-10 rounded-full border border-dashed border-white/15 motion-safe:animate-[spin_60s_linear_infinite]" aria-hidden="true" />
                <div className="absolute inset-20 rounded-full border border-white/10" aria-hidden="true" />
                <div className="relative text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">SBA Certified</p>
                  <p className="mt-2 font-display text-7xl font-extrabold tracking-wider text-white">SDVOSB</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-mist">Veteran Owned · Est. 2006</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {differentiators.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.08} className="brackets bg-ink-2 p-7 transition-colors duration-500 hover:bg-navy/40 lg:p-9">
                  <d.icon className="h-7 w-7 text-fog" strokeWidth={1.3} />
                  <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-wide text-white">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{d.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-14">
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Customer history</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate">Source: mdbgrp.com</span>
              </div>
              <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
                {customers.map((c) => (
                  <li key={c.org} className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-4 sm:grid-cols-[1.1fr_1.4fr_auto_auto]">
                    <span className="font-display text-lg font-semibold uppercase tracking-wide text-white">{c.org}</span>
                    <span className="order-3 col-span-2 text-sm text-mist sm:order-none sm:col-span-1">{c.unit}</span>
                    <span
                      className={`hidden border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] sm:inline ${
                        c.role === 'Prime' ? 'border-white/60 text-white' : 'border-white/15 text-mist'
                      }`}
                    >
                      {c.role}
                    </span>
                    <span className="text-right font-mono text-xs text-slate">{c.since}–</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-slate">
                Customer relationships as listed on MDB Group's website. Roles and dates should be confirmed with the company
                before publication.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
