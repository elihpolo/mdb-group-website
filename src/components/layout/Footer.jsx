import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks } from '../../data/navigation.js';
import { company, identifiers, SOURCES } from '../../data/company.js';
import { capabilities } from '../../data/capabilities.js';

export default function Footer() {
  const hq = company.headquarters;
  return (
    <footer className="relative border-t-2 border-brand bg-ink-2">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-5 pb-10 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="inline-flex bg-brand px-5 py-4">
              <Logo className="h-6 sm:h-7" />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              Service-Disabled Veteran-Owned management consulting supporting the Department of Defense with planning,
              acquisition, force development and financial expertise.
            </p>
            <dl className="mt-8 grid max-w-sm grid-cols-2 gap-px border border-white/10 bg-white/10">
              {identifiers.map((id) => (
                <div key={id.label} className="bg-ink-2 px-4 py-3">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate">{id.label}</dt>
                  <dd className="mt-1 font-mono text-sm text-fog">{id.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <FooterCol title="Navigate" className="lg:col-span-2">
            {navLinks.map((l) => (
              <FooterLink key={l.to} to={l.to}>{l.label}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Capabilities" className="lg:col-span-3">
            {capabilities.map((c) => (
              <FooterLink key={c.slug} to={`/capabilities#${c.slug}`}>{c.title}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Headquarters" className="lg:col-span-3">
            <li>
              <a href={hq.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 text-sm text-mist transition-colors hover:text-white">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{hq.street}<br />{hq.city}, {hq.state} {hq.zip}</span>
              </a>
            </li>
            <li>
              <a href={company.phoneHref} className="flex gap-3 text-sm text-mist transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0" /> {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex gap-3 text-sm text-mist transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0" /> {company.email}
              </a>
            </li>
            <li>
              <a href={SOURCES.gsa} target="_blank" rel="noreferrer" className="flex gap-3 text-sm text-mist transition-colors hover:text-white">
                <ExternalLink className="h-4 w-4 shrink-0" /> GSA eLibrary listing
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs leading-relaxed text-slate md:flex-row md:items-start md:justify-between">
          <p className="max-w-3xl">
            Unofficial website redesign concept created for a web development portfolio. Not affiliated with, endorsed by or
            published on behalf of MDB Group, LLC. Company details were compiled from public sources (<a className="underline hover:text-fog" href={SOURCES.site} target="_blank" rel="noreferrer">mdbgrp.com</a>,{' '}
            <a className="underline hover:text-fog" href={SOURCES.gsa} target="_blank" rel="noreferrer">GSA eLibrary</a>) and should
            be confirmed with the company. Photography is U.S. Army public-domain imagery used for illustration; it does not
            depict MDB Group work and does not imply DoD endorsement.
          </p>
          <Link to="/photo-credits" className="shrink-0 font-mono uppercase tracking-[0.18em] text-mist hover:text-white">
            Photo credits →
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, className = '', children }) {
  return (
    <div className={className}>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-sm text-mist transition-colors duration-200 hover:text-white">
        {children}
      </Link>
    </li>
  );
}
