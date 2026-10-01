import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Philosophy() {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={elementRef} className="py-24 md:py-40 px-6 bg-[#2e2e2e] text-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#fd8471] to-transparent opacity-50"></div>
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-12 bg-[#fd8471]/40"></span>
          <span className="text-xs uppercase tracking-[0.4em] text-[#fd8471] font-semibold">Our Philosophy</span>
          <span className="h-px w-12 bg-[#fd8471]/40"></span>
        </div>
        <h2 className="text-[1.3125rem] md:text-[2.1rem] lg:text-[2.625rem] font-extrabold leading-[1.1] mb-10" style={{ letterSpacing: '0.5px' }}>
          <span className="block text-[#f9f4ef]">WE&rsquo;RE JUST NOT INTERESTED IN</span>
          <span className="block text-[#f9f4ef]">MAKING MORE CONTENT.</span>
          <span className="block mt-4 md:mt-6">WE&rsquo;RE INTERESTED IN MAKING WORK</span>
          <span className="block">PEOPLE ACTUALLY <span className="text-[#fd8471]">REMEMBER.</span></span>
        </h2>
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8 bg-black/15"></span>
          <span className="text-[#fd8471] text-lg">&bull;</span>
          <span className="h-px w-8 bg-black/15"></span>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-light text-[#f9f4ef] leading-relaxed mb-6">
            Creative shouldn&rsquo;t feel like a relay race. It shouldn&rsquo;t require six vendors. Five kickoff meetings. Three revisions because someone misunderstood the vision. Or endless email chains between strategy, design, production, and post.
          </p>
          <p className="text-lg md:text-xl font-bold text-black leading-relaxed mb-6">
            WE BELIEVE THE BEST WORK HAPPENS WHEN THE PEOPLE WITH THE IDEAS ARE THE SAME PEOPLE BRINGING THEM TO LIFE.
          </p>
          <p className="text-lg md:text-xl font-light text-[#f9f4ef] leading-relaxed">
            That&rsquo;s why we built State of Mind differently.
          </p>
        </div>
      </div>
    </section>
  );
}
