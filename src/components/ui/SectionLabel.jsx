// Small technical eyebrow: "01 — COMPANY"
export default function SectionLabel({ index, children, className = '' }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-mist ${className}`}>
      {index && <span className="text-white">{index}</span>}
      <span className="h-px w-8 bg-mist/50" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
