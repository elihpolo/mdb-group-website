import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import SectionLabel from '../ui/SectionLabel.jsx';
import { photos } from '../../data/photos.js';
import { company } from '../../data/company.js';

export default function ContactCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section ref={ref} className="relative isolate overflow-hidden py-28 lg:py-44" aria-labelledby="cta-title">
      <motion.img
        style={{ y }}
        src={photos.motorpool.src}
        srcSet={`${photos.motorpool.srcSm} 1000w, ${photos.motorpool.src} 2400w`}
        sizes="100vw"
        alt=""
        loading="lazy"
        className="photo-grade absolute inset-0 -z-20 h-[124%] w-full -translate-y-[12%] object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-navy/40" aria-hidden="true" />
      <p className="absolute bottom-3 right-5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 sm:right-8">
        {photos.motorpool.credit} · Representative imagery
      </p>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <SectionLabel index="06">Start the Conversation</SectionLabel>
          <h2 id="cta-title" className="mt-6 font-display text-[clamp(2.6rem,6vw,5.5rem)] font-bold uppercase leading-[0.92] text-white">
            Have a requirement? Let's talk mission.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog/85">
            Whether you're a program office planning a new effort or a prime looking for an SDVOSB teaming partner, our team is
            ready to help.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Contact Our Team</Button>
            <Button to="/contract-vehicles" variant="outline">Contracting Info</Button>
          </div>
          <div className="mt-12 flex flex-col gap-4 font-mono text-sm text-fog sm:flex-row sm:gap-10">
            <a href={company.phoneHref} className="inline-flex items-center gap-3 hover:text-white">
              <Phone className="h-4 w-4 text-mist" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-3 hover:text-white">
              <Mail className="h-4 w-4 text-mist" /> {company.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
