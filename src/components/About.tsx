import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactModal from './ContactModal';

const team = [
  {
    name: 'Jeremy Andary',
    title: 'Chief Production Officer',
    image: '/JA_Headshot4-5 copy 2.jpg',
  },
  {
    name: 'Vincent Recchia',
    title: 'Chief Client Officer',
    image: '/VR_Headshot4-5 copy.jpg',
  },
  {
    name: 'Richard Pouncy Jr.',
    title: 'Chief Creative Director',
    image: '/RP_Headshot4-5_v2.jpg',
  },
];

export default function About() {
  const { elementRef, isVisible } = useScrollAnimation(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="about" ref={elementRef} className="py-24 md:py-40 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-16 md:mb-24 text-[#f9f4ef] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ letterSpacing: '0.5px' }}
          >
            Who We Are
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {team.map((member, i) => (
              <div
                key={i}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black mb-6 group">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#f9f4ef]/20 text-sm tracking-widest uppercase">Photo Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-lg md:text-xl font-light text-[#f9f4ef] mb-1">{member.name}</h3>
                <p className="text-sm text-[#f9f4ef]/50 tracking-wide">{member.title}</p>
              </div>
            ))}
          </div>

          <div className={`mt-16 md:mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-3 bg-[#fd8471] text-black font-medium text-sm tracking-wide hover:bg-[#fd8471]/90 transition-all duration-300 hover:scale-105 rounded-full"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
