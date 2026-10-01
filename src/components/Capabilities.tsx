import { Hammer, Camera, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const phases = [
  {
    icon: Hammer,
    title: 'Build',
    description: 'Starting something new? We\u2019ll help define your brand, message, positioning, and creative direction.',
    items: ['Brand Strategy', 'Messaging', 'Naming', 'Visual Identity', 'Creative Direction'],
  },
  {
    icon: Camera,
    title: 'Create',
    description: 'Need content people actually pay attention to? We\u2019ll make it.',
    items: ['Commercials', 'Brand Films', 'Social Campaigns', 'Product Launches', 'Motion Design', 'Live Event Coverage/Recap'],
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Keep showing up. Keep improving. Keep creating.',
    items: ['Monthly Content', 'Campaign Creative', 'Social Content', 'Editing', 'Creative Consulting'],
  },
];

export default function Capabilities() {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="capabilities" ref={elementRef} className="py-24 md:py-40 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#fd8471]/40"></span>
            <span className="text-xs uppercase tracking-[0.4em] text-[#fd8471] font-semibold">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-[#f9f4ef]" style={{ letterSpacing: '0.5px' }}>Our Process</h2>
          <p className="text-base md:text-xl text-[#f9f4ef]/60 font-light max-w-2xl">
            From foundation to momentum, a single team across every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 md:p-10 bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-[#fd8471]/30 transition-all duration-700 rounded-3xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  {index === 0 ? (
                    <img src="/Wave_03.png" alt="" className="h-14 w-full object-cover" />
                  ) : index === 1 ? (
                    <img src="/Wave_01 copy.png" alt="" className="h-14 w-full object-cover" />
                  ) : index === 2 ? (
                    <img src="/Wave_02.png" alt="" className="h-14 w-full object-contain" />
                  ) : (
                    <>
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 text-[#f9f4ef] group-hover:bg-[#fd8471] group-hover:text-black transition-all duration-300 rounded-xl">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-5xl md:text-6xl font-extrabold text-[#f9f4ef]/[0.06] group-hover:text-[#fd8471]/[0.12] transition-all duration-500 leading-none">
                        0{index + 1}
                      </span>
                    </>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-[#f9f4ef]" style={{ letterSpacing: '0.5px' }}>{phase.title}</h3>
                <p className="text-[#f9f4ef]/60 font-light leading-relaxed mb-8">
                  {phase.description}
                </p>
                <ul className="space-y-2.5">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base text-[#f9f4ef]/70 font-light">
                      <span className="w-1.5 h-1.5 bg-[#fd8471] rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
