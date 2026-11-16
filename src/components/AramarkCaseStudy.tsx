import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Shot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const heroShot: Shot = {
  src: '/work/aramark/flyer-mockup.jpg',
  alt: 'WHQ Farmers Market flyer with illustrated produce on a green background',
  width: 2000,
  height: 1333,
};

const gallery: Shot[] = [
  { src: '/work/aramark/tote-mockup.jpg', alt: 'WHQ Farmers Market tote bag design', width: 1400, height: 933 },
  { src: '/work/aramark/guests-with-totes.jpg', alt: 'Three guests holding WHQ Farmers Market tote bags outside Gallery Hall', width: 1400, height: 1159 },
  { src: '/work/aramark/poster-easel.jpg', alt: 'Event poster on an easel inside Ford World Headquarters', width: 1050, height: 1400 },
  { src: '/work/aramark/coffee-cup.jpg', alt: 'Barista holding a coffee cup with the WHQ Farmers Market sticker', width: 1400, height: 934 },
  { src: '/work/aramark/flower-sticker.jpg', alt: 'Flower bouquet wrapped with a WHQ Farmers Market sticker', width: 1400, height: 933 },
  { src: '/work/aramark/produce-stand.jpg', alt: 'Staff member in a WHQ Farmers Market shirt at a produce stand', width: 1050, height: 1400 },
  { src: '/work/aramark/tote-trio.jpg', alt: 'Three guests showing their WHQ Farmers Market totes', width: 1400, height: 933 },
  { src: '/work/aramark/poster-sign.jpg', alt: 'Event poster in an outdoor sign frame', width: 1400, height: 933 },
  { src: '/work/aramark/courtyard-crowd.jpg', alt: 'Crowd shopping vendor tables in the Ford World Headquarters courtyard', width: 1400, height: 933 },
  { src: '/work/aramark/tote-on-stairs.jpg', alt: 'Guest with a tote bag and flowers on the courtyard steps', width: 1400, height: 933 },
];

const allShots = [heroShot, ...gallery];

const results = [
  { stat: '20 min', label: 'for all 100 free totes to disappear' },
  { stat: 'Sold out', label: 'almost every vendor, within a few hours' },
];

const details = [
  { label: 'Client', value: 'Aramark' },
  { label: 'Location', value: 'Ford World Headquarters, Dearborn, MI' },
  { label: 'Event', value: 'September 2026' },
  { label: 'Deliverables', value: 'Event logo · Flyer & poster graphics · Tote, cup & sticker designs' },
];

export default function AramarkCaseStudy() {
  const { elementRef, isVisible } = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null);
      if (event.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % allShots.length));
      if (event.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : (i - 1 + allShots.length) % allShots.length));
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [openIndex]);

  const step = (delta: number) =>
    setOpenIndex((i) => (i === null ? i : (i + delta + allShots.length) % allShots.length));

  return (
    <>
      <section id="aramark" ref={elementRef} className="py-24 md:py-40 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-[#fd8471]/40"></span>
              <span className="text-xs uppercase tracking-[0.4em] text-[#fd8471] font-semibold">Case Study</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-[#f9f4ef]" style={{ letterSpacing: '0.5px' }}>
              WHQ Farmers Market
            </h2>
            <p className="text-base md:text-xl text-[#f9f4ef]/60 font-light">Aramark × Ford World Headquarters</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 mb-16">
            <div className="lg:col-span-3">
              <p className="text-lg md:text-2xl font-light leading-relaxed text-[#f9f4ef]/80 mb-10">
                Aramark brought a farmers market to Ford World Headquarters in Dearborn, filling the courtyard
                outside Gallery Hall with local produce, flowers, coffee and makers. We created the event&rsquo;s
                identity: the WHQ Farmers Market logo, the illustrated flyer and poster graphics, and the tote,
                cup and sticker designs that carried it through the day.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {results.map((result) => (
                  <div key={result.stat} className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl">
                    <p className="text-4xl md:text-5xl font-extrabold text-[#fd8471] mb-2">{result.stat}</p>
                    <p className="text-sm md:text-base text-[#f9f4ef]/60">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <dl className="lg:col-span-2 space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[#fd8471] mb-2">{detail.label}</dt>
                  <dd className="text-base md:text-lg text-[#f9f4ef]">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="group block w-full mb-6 md:mb-8 overflow-hidden rounded-3xl"
            aria-label={`View larger: ${heroShot.alt}`}
          >
            <img
              src={heroShot.src}
              alt={heroShot.alt}
              width={heroShot.width}
              height={heroShot.height}
              loading="lazy"
              decoding="async"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </button>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8">
            {gallery.map((shot, index) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setOpenIndex(index + 1)}
                className="group block w-full mb-6 md:mb-8 break-inside-avoid overflow-hidden rounded-2xl"
                aria-label={`View larger: ${shot.alt}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="WHQ Farmers Market image viewer"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpenIndex(null);
          }}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 z-10 rounded-full border border-white/30 p-3 text-[#f9f4ef] transition-colors hover:border-white hover:bg-white/10 md:right-8 md:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 rounded-full border border-white/30 p-3 text-[#f9f4ef] transition-colors hover:border-white hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={allShots[openIndex].src}
            alt={allShots[openIndex].alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
          />
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next image"
            className="absolute right-3 md:right-8 rounded-full border border-white/30 p-3 text-[#f9f4ef] transition-colors hover:border-white hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
