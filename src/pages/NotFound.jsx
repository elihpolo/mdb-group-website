import PageTransition from '../components/ui/PageTransition.jsx';
import Button from '../components/ui/Button.jsx';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="tech-grid flex min-h-[80svh] items-center pt-32">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-mist">Error 404</p>
          <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase leading-[0.92] text-white">Off the map.</h1>
          <p className="mt-6 max-w-lg text-mist">The page you're looking for doesn't exist or has moved.</p>
          <div className="mt-10">
            <Button to="/">Return Home</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
