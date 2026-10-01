import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactModal from './ContactModal';

export default function CallToAction() {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" ref={elementRef} className="py-24 md:py-40 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full filter blur-[150px]"></div>
        </div>

        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-12 bg-[#fd8471]/40"></span>
            <span className="text-xs uppercase tracking-[0.4em] text-[#fd8471] font-semibold">Ready When You Are</span>
            <span className="h-px w-12 bg-[#fd8471]/40"></span>
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-8 text-[#f9f4ef] leading-[1.15]" style={{ letterSpacing: '0.5px' }}>
            <span className="block">In an industry that has simply become unnecessarily complicated,</span>
            <span className="block">we decided it was time for a change.</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-white/15"></span>
            <span className="text-[#fd8471] text-lg">&bull;</span>
            <span className="h-px w-8 bg-white/15"></span>
          </div>
          <p className="text-base md:text-xl text-[#f9f4ef]/60 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
            Let&rsquo;s find your <strong className="font-neutronic">state of mind</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-3 bg-[#fd8471] text-black font-medium text-sm tracking-wide hover:bg-[#fd8471]/90 transition-all duration-300 hover:scale-105 rounded-full"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
