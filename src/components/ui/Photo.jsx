// Graded, responsive photo with a small credit tag (required for DoD imagery).
export default function Photo({ photo, className = '', imgClassName = '', hover = false, credit = true, priority = false, sizes = '100vw' }) {
  return (
    <figure className={`relative overflow-hidden bg-navy ${className}`}>
      <img
        src={photo.src}
        srcSet={`${photo.srcSm} 1000w, ${photo.src} 2400w`}
        sizes={sizes}
        alt={photo.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`photo-grade h-full w-full object-cover ${hover ? 'photo-grade-hover' : ''} ${imgClassName}`}
      />
      <div className="photo-tint pointer-events-none absolute inset-0" aria-hidden="true" />
      {credit && (
        <figcaption className="absolute bottom-2 right-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">
          {photo.credit}
        </figcaption>
      )}
    </figure>
  );
}
