import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition.jsx';
import SectionLabel from '../components/ui/SectionLabel.jsx';
import { photos } from '../data/photos.js';

export default function PhotoCredits() {
  useEffect(() => {
    document.title = 'Photo Credits | MDB Group (Redesign Concept)';
  }, []);

  return (
    <PageTransition>
      <section className="pb-24 pt-44">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <SectionLabel>Image Sources</SectionLabel>
          <h1 className="mt-6 font-display text-[clamp(2.8rem,6vw,5rem)] font-bold uppercase leading-[0.95] text-white">Photo Credits</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-mist">
            All photographs are U.S. Army imagery in the public domain as works of the U.S. federal government, obtained
            through Wikimedia Commons (originally DVIDS and U.S. Army Flickr). They are used for illustration only: they do not
            show MDB Group personnel or projects, and their use does not imply endorsement by the Department of Defense or the
            U.S. Army. Images have been cropped and color graded.
          </p>
          <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(photos).map((p) => (
              <li key={p.src} className="bg-ink">
                <img src={p.srcSm} alt={p.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <p className="text-sm text-fog">{p.alt}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mist">{p.credit} · Public domain</p>
                  <a href={p.source} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-xs text-mist underline hover:text-white">
                    Source file <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
