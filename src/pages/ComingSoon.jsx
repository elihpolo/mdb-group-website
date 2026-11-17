import { useEffect } from 'react';
import PageTransition from '../components/ui/PageTransition.jsx';
import SectionLabel from '../components/ui/SectionLabel.jsx';
import Button from '../components/ui/Button.jsx';
import { company, SOURCES } from '../data/company.js';

// Temporary interior pages for the homepage review phase. Each one still offers real next steps.
const pages = {
  about: { title: 'About MDB Group', blurb: 'Company history, veteran-owned background, mission and values.' },
  capabilities: { title: 'Capabilities', blurb: 'Detailed sections for all eight capability areas.' },
  'contract-vehicles': { title: 'Contract Vehicles', blurb: 'GSA MAS details, SINs, identifiers and official government links.' },
  careers: { title: 'Careers', blurb: 'Culture, career fields and the official recruiting link.' },
  contact: { title: 'Contact', blurb: 'Headquarters, verified contact details and an inquiry form.' },
};

export default function ComingSoon({ page }) {
  const p = pages[page];
  useEffect(() => {
    document.title = `${p.title} | MDB Group (Redesign Concept)`;
  }, [p.title]);

  return (
    <PageTransition>
      <section className="tech-grid flex min-h-[80svh] items-center pb-24 pt-44">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
          <SectionLabel>In design · Phase 4</SectionLabel>
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase leading-[0.92] text-white">{p.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-mist">
            Coming in the next build phase. {p.blurb}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/">Back to Home</Button>
            {page === 'contract-vehicles' ? (
              <Button href={SOURCES.gsa} variant="outline">View Official GSA Contract</Button>
            ) : page === 'careers' ? (
              <Button href={SOURCES.careers} variant="outline">Current Openings (mdbgrp.com)</Button>
            ) : (
              <Button href={`mailto:${company.email}`} variant="outline">Email MDB Group</Button>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
