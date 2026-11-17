import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import { gsaContract, identifiers, classifications, SOURCES } from '../../data/company.js';

export default function ContractingPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink py-24 lg:py-36" aria-labelledby="contract-title">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel index="05">Federal Contracting</SectionLabel>
            <h2 id="contract-title" className="mt-6 font-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold uppercase leading-[0.95] text-white">
              Easy to find. Easy to buy.
            </h2>
            <p className="mt-8 leading-relaxed text-mist">
              Agencies can reach MDB Group's services through the GSA Multiple Award Schedule. Our registration details are
              listed here for contracting officers and teaming partners.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <Button to="/contract-vehicles">Contract Vehicles</Button>
              <Button href={SOURCES.gsa} variant="outline">View Official GSA Contract</Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="brackets relative border border-white/15 bg-ink-2">
              <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
              <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">GSA {gsaContract.schedule}</p>
                  <p className="mt-1 font-display text-3xl font-bold tracking-wide text-white sm:text-4xl">{gsaContract.number}</p>
                </div>
                <span className="inline-flex items-center gap-2 border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                  <span className="h-1.5 w-1.5 bg-emerald-400" aria-hidden="true" /> Active · Option through {gsaContract.currentPeriodEnds}
                </span>
              </div>

              <div className="relative grid md:grid-cols-5">
                <div className="border-b border-white/10 p-6 sm:p-8 md:col-span-3 md:border-b-0 md:border-r">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate">Special Item Numbers</p>
                  <ul className="mt-4 space-y-3">
                    {gsaContract.sins.map((s) => (
                      <li key={s.code} className="grid grid-cols-[92px_1fr] gap-3 text-sm">
                        <span className="font-mono text-white">{s.code}</span>
                        <span className="text-mist">{s.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <dl className="grid grid-cols-2 content-start gap-px bg-white/10 md:col-span-2 md:grid-cols-1">
                  {identifiers.filter((i) => i.label !== 'GSA MAS').map((id) => (
                    <div key={id.label} className="bg-ink-2 px-6 py-5 sm:px-8">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate">{id.label}</dt>
                      <dd className="mt-1 font-mono text-lg text-white">{id.value}</dd>
                    </div>
                  ))}
                  <div className="col-span-2 bg-ink-2 px-6 py-5 sm:px-8 md:col-span-1">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate">Classifications</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {['SDVOSB', 'VOSB', 'Small Business'].map((c) => (
                        <span key={c} className="border border-white/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-fog">
                          {c}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate">
              Sources: GSA eLibrary and HigherGov (SAM.gov data), checked November 2026. {classifications[0]} status is SBA certified.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
