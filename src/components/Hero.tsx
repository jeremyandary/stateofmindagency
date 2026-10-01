import { ArrowDown, ArrowUpRight, Play, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      if (!heroRef.current) return;

      const bounds = heroRef.current.getBoundingClientRect();
      const scrollDistance = Math.max(bounds.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-bounds.top / scrollDistance, 0), 1);
      setScrollProgress(progress);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    if (!isVideoOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsVideoOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isVideoOpen]);

  return (
    <section ref={heroRef} className="relative h-[180vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <iframe
            src="https://framerate.tv/embed/7db0bf6c-e61e-42b7-b44f-eeffe7dc16c2?background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            title="State of Mind showreel"
            onLoad={() => setIsLoaded(true)}
            className={`absolute left-1/2 top-1/2 h-[56.25vw] min-h-screen w-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 scale-[1.02] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div
            className="absolute inset-0 cursor-pointer bg-gradient-to-b from-black/40 via-transparent to-black/70"
            role="button"
            tabIndex={0}
            aria-label="Open State of Mind showreel"
            onClick={() => setIsVideoOpen(true)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setIsVideoOpen(true);
              }
            }}
          >
            <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full border border-[#fd8471]/70 bg-black/30 px-5 py-3 text-xs uppercase tracking-[0.2em] text-[#fd8471] backdrop-blur-sm transition-colors hover:border-[#fd8471] hover:bg-black/50">
              <Play className="h-3.5 w-3.5 fill-current" />
              Watch showreel
            </span>

            {isVideoOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
                role="dialog"
                aria-modal="true"
                aria-label="State of Mind showreel player"
                onClick={(event) => {
                  if (event.target === event.currentTarget) setIsVideoOpen(false);
                }}
              >
                <button
                  type="button"
                  aria-label="Close video player"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsVideoOpen(false);
                  }}
                  className="absolute right-5 top-5 z-10 rounded-full border border-white/30 p-3 text-[#f9f4ef] transition-colors hover:border-white hover:bg-white/10 md:right-8 md:top-8"
                >
                  <X className="h-5 w-5" />
                </button>
                <iframe
                  src="https://framerate.tv/embed/7db0bf6c-e61e-42b7-b44f-eeffe7dc16c2?background=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="State of Mind showreel player"
                  className="h-full max-h-[80vh] w-full max-w-6xl"
                />
              </div>
            )}
          </div>
        </div>

        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 text-sm text-[#f9f4ef] md:px-10 md:py-7">
          <a href="#top" className="group block transition-opacity hover:opacity-75">
            <img
              src="/SOM_Brain_Logo_v2_WHT copy.png"
              alt="State of Mind Productions"
              className="h-auto w-36 md:w-48"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#work" className="text-[#f9f4ef] transition-opacity hover:opacity-60">Work</a>
            <a href="#about" className="transition-opacity hover:opacity-60">About</a>
            <a href="#capabilities" className="transition-opacity hover:opacity-60">Capabilities</a>
          </nav>

          <a href="#contact" className="group flex items-center gap-2 transition-opacity hover:opacity-60">
            Let's talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </header>

        <div
          className="absolute inset-x-0 bottom-0 z-10 px-6 pb-9 md:px-10 md:pb-12"
          style={{
            transform: `translateY(${-scrollProgress * 48}vh)`,
            opacity: 1 - scrollProgress * 0.08,
          }}
        >
          <div className="max-w-3xl transition-transform duration-300">
            <h1
              className="font-neutronic max-w-3xl text-[clamp(1.25rem,2.5vw,2.5rem)] leading-[0.95] tracking-[-0.02em] text-[#f9f4ef]"
            >
              WE EXIST TO MAKE EXCEPTIONAL CREATIVE RADICALLY EASIER.
            </h1>
            <div className="mt-7 flex flex-col gap-5 md:mt-10 md:flex-row md:items-end md:justify-between">
              <a href="#work" className="group inline-flex w-fit items-center gap-3 text-sm text-[#f9f4ef] transition-colors hover:text-[#fd8471]">
                Explore the work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-6 z-20 hidden items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#f9f4ef]/60 md:flex md:right-10">
          <span>Scroll to explore</span>
          <span className="h-px w-10 bg-white/40" />
        </div>
      </div>
    </section>
  );
}
