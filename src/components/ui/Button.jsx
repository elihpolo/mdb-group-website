import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const styles = {
  primary: 'bg-white text-ink hover:bg-fog',
  outline: 'border border-fog/35 text-white hover:border-white hover:bg-white/8',
  ghost: 'text-white px-0! hover:text-fog',
};

// Renders a router Link for internal paths and an <a> for external URLs, mailto: and tel:.
export default function Button({ to, href, variant = 'primary', icon: Icon = ArrowUpRight, children, className = '', ...rest }) {
  const cls = `group inline-flex whitespace-nowrap items-center justify-center gap-3 px-7 py-4 font-display text-[15px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  );

  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  const external = href?.startsWith('http');
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
      {inner}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
