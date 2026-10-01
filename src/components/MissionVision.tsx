import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function MissionVision() {
  const { elementRef, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={elementRef} className="relative bg-black px-6 py-28 md:py-44">
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-20 transition-all duration-1000 md:mb-28 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <p className="max-w-3xl text-base font-light leading-relaxed text-[#f9f4ef]/70 md:text-lg">
            State of Mind is a modern creative agency that helps brands go from idea to launch without bouncing between agencies, freelancers, and production companies. We combine strategy, creative direction, design, production, and post-production into one seamless process, giving our clients a faster, simpler way to build work people actually remember.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-24">
          <article
            className={`border-t border-white/15 pt-10 transition-all delay-150 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h3 className="mb-8 text-sm uppercase tracking-[0.25em] text-[#f9f4ef]/50">Our Mission</h3>
            <p className="text-xl font-light leading-relaxed text-[#f9f4ef]/85 md:text-2xl">
              We remove the friction between strategy, creative, production, and delivery so brands can move faster without sacrificing quality.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-[#f9f4ef]/55 md:text-lg">
              The creative industry has become unnecessarily complicated.{' '}
              <span className="font-neutronic text-[#f9f4ef]">Our mission is to simplify it.</span>
            </p>
          </article>

          <article
            className={`border-t border-[#fd8471]/40 pt-10 transition-all delay-300 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h3 className="mb-8 text-sm uppercase tracking-[0.25em] text-[#fd8471]/80">Our Vision</h3>
            <p className="text-xl font-light leading-relaxed text-[#f9f4ef]/85 md:text-2xl">
              To become the creative partner companies call when they want one team capable of building ideas from concept to culture.
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-[#f9f4ef]/55 md:text-lg">
              To redefine what clients expect from creative agencies.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
