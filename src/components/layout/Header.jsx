import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks } from '../../data/navigation.js';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Concept disclaimer: always visible so the site is never mistaken for the official one */}
      <div className="bg-steel/90 px-4 py-1.5 text-center font-mono text-[10px] tracking-[0.18em] text-fog backdrop-blur sm:text-[11px]">
        UNOFFICIAL REDESIGN CONCEPT · NOT AFFILIATED WITH OR ENDORSED BY MDB GROUP, LLC
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled || open ? 'border-b border-white/10 bg-ink/85 backdrop-blur-md' : 'bg-gradient-to-b from-ink/70 to-transparent'
        }`}
      >
        <nav className="mx-auto flex h-18 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-20" aria-label="Main">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `group relative px-3.5 py-2 font-display text-[15px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-mist hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <span
                        className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-white transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact"
            className="group hidden items-center gap-2 border border-fog/30 px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-brand hover:bg-brand xl:inline-flex"
          >
            Partner With Us
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </NavLink>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center border border-fog/25 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h-[calc(100dvh-6rem)] overflow-y-auto bg-ink/97 px-5 pb-10 pt-4 backdrop-blur-md lg:hidden"
          >
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 font-display text-3xl font-bold uppercase tracking-[0.06em] ${
                        isActive ? 'text-white' : 'text-mist'
                      }`
                    }
                  >
                    <span>
                      <span className="mr-4 font-mono text-xs text-slate">0{i + 1}</span>
                      {l.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5" />
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
