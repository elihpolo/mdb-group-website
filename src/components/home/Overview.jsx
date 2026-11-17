import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import Photo from '../ui/Photo.jsx';
import Button from '../ui/Button.jsx';
import { photos } from '../../data/photos.js';
import { company } from '../../data/company.js';

const stats = [
  { value: company.founded, label: 'Established', note: 'Lorton, Virginia' },
  { value: '2015', label: 'First prime contract', note: 'Army G-8 Force Development' },
  { value: company.clearedStaff, label: 'Full-time professionals', note: 'Secret, TS and TS/SCI cleared' },
  { value: '4', label: 'GSA MAS SINs', note: 'Plus order-level materials' },
];

export default function Overview() {
  return (
    <section id="overview" className="relative bg-ink py-24 lg:py-36" aria-labelledby="overview-title">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="01">Company Overview</SectionLabel>
              <h2 id="overview-title" className="mt-6 font-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold uppercase leading-[0.95] text-white">
                Veteran-led expertise for defense decision-makers.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-fog/85">
                Since {company.founded}, MDB Group has provided technical, operational, force development, financial and
                acquisition consulting to the Department of Defense — removing barriers so government offices can deliver
                capability to the force.
              </p>
              <p className="mt-5 leading-relaxed text-mist">
                What began as subcontract support to Army and OUSD(I&amp;S) programs grew into successive prime contracts with
                the Army's Deputy Chief of Staff, G-8 Force Development Directorate, and support roles across PEO C3T, TACOM
                and USSOCOM.
              </p>
              <div className="mt-10">
                <Button to="/about" variant="outline">Our Story</Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <Reveal delay={0.15} className="group relative">
              <Photo photo={photos.briefing} hover className="aspect-[16/10]" sizes="(min-width:1024px) 55vw, 100vw" />
              <div className="absolute -bottom-px -left-px hidden bg-ink px-6 py-4 sm:block">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Mission focus</p>
                <p className="mt-1 font-display text-xl font-semibold uppercase tracking-wide text-white">Plan · Program · Execute</p>
              </div>
            </Reveal>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 border-t border-white/10 lg:mt-28 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="border-b border-white/10 py-8 pr-4 odd:border-r lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">{s.label}</dt>
              <dd className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">{s.value}</dd>
              <dd className="mt-2 text-sm text-slate">{s.note}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
