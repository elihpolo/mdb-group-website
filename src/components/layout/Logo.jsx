import { Link } from 'react-router-dom';
import logoHorizontalWhite from '../../assets/brand/mdb-logo-horizontal-white.png';

// Official MDB Group horizontal logo (white version, background removed from the supplied artwork).
// Height drives the size; width follows the original 1017 × 114 proportions.
export default function Logo({ onClick, className = 'h-[22px] sm:h-6 xl:h-8' }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="inline-flex shrink-0 items-center opacity-95 transition-opacity duration-300 hover:opacity-100"
      aria-label="MDB Group LLC home"
    >
      <img src={logoHorizontalWhite} alt="MDB Group LLC" width="1017" height="114" className={`w-auto ${className}`} />
    </Link>
  );
}
