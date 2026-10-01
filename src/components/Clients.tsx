import { useScrollAnimation } from '../hooks/useScrollAnimation';

const clients: { name: string; logo?: string; logoClass?: string }[] = [
  { name: 'Google', logo: '/google-logo.png', logoClass: 'w-[132px]' },
  { name: 'Ford', logo: '/ford-logo.png', logoClass: 'w-[78px] scale-[3.8]' },
  { name: 'General Motors', logo: '/general-motors-logo.png', logoClass: 'w-[58px] scale-[1.8]' },
  { name: 'Allstate', logo: '/allstate-logo.png', logoClass: 'w-[92px] scale-[3.8]' },
  { name: 'Tylenol', logo: '/tylenol-logo-vector-2022.png', logoClass: 'w-[94px]' },
  { name: 'UPS', logo: '/ups-logo_brandlogos.png', logoClass: 'w-[54px]' },
  { name: 'PepsiCo', logo: '/pepsico-logo.png', logoClass: 'w-[122px]' },
  { name: 'Marriott Bonvoy', logo: '/marriott_bonvoy-logo.png', logoClass: 'w-[86px] scale-[2.8]' },
  { name: 'McKesson', logo: '/mckesson-corporation-logo.png', logoClass: 'w-[124px]' },
  { name: 'Aramark', logo: '/aramark-logo_brandlogos.png', logoClass: 'w-[78px] scale-[1.35]' },
  { name: 'fairlife', logo: '/fairlife-logo_brandlogos.png', logoClass: 'w-[78px] scale-[1.55]' },
  { name: 'Mango Languages', logo: '/MangoLanguages_Logo+Languages.png', logoClass: 'w-[62px]' },
];

export default function Clients() {
  const { elementRef, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={elementRef} className="py-24 md:py-32 px-6 bg-[#f9f4ef] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p
          className={`text-xs uppercase tracking-[0.3em] text-[#f9f4ef]/40 mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span style={{ color: '#18181b' }}>Clients Our Founders Have Worked With</span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
          {clients.map((client, i) => (
            <div
              key={i}
              className={`flex h-16 items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`h-8 md:h-10 max-w-full object-contain opacity-50 hover:opacity-100 transition-opacity duration-400 grayscale hover:grayscale-0 ${client.logoClass ?? 'w-[96px]'}`}
                />
              ) : (
                <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#f9f4ef]/25 hover:text-[#f9f4ef]/60 transition-colors duration-400 text-center select-none">
                  {client.name === 'Google' ? (
                    <>
                      <span className="text-[#4285f4]">G</span>
                      <span className="text-[#ea4335]">o</span>
                      <span className="text-[#fbbc05]">o</span>
                      <span className="text-[#4285f4]">g</span>
                      <span className="text-[#34a853]">l</span>
                      <span className="text-[#ea4335]">e</span>
                    </>
                  ) : client.name === 'Ford' ? (
                    <span className="inline-block rounded-[50%] border-2 border-[#2d6cdf] px-4 py-1 font-serif italic tracking-tight text-[#4a8bea]">
                      Ford
                    </span>
                  ) : client.name === 'General Motors' ? (
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#4a90e2] bg-[#2367b1] text-base font-bold tracking-tight text-white shadow-[inset_0_0_0_2px_#2367b1]">
                      GM
                    </span>
                  ) : client.name === 'Allstate' ? (
                    <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#4c9be8] px-3 py-2 text-[0.7rem] font-bold tracking-[0.08em] text-[#65b2f2]">
                      <span className="text-base leading-none">⌂</span>
                      ALLSTATE
                    </span>
                  ) : client.name === 'Tylenol' ? (
                    <span className="inline-flex rounded-full border-2 border-[#e53935] bg-[#c62828] px-4 py-2 text-[0.75rem] font-black tracking-[0.12em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                      TYLENOL
                    </span>
                  ) : client.name === 'UPS' ? (
                    <span className="inline-flex h-14 w-12 items-center justify-center rounded-b-[45%] rounded-t-md border-2 border-[#f5c242] bg-[#351c15] text-sm font-black tracking-tight text-[#f5c242] shadow-[inset_0_0_0_2px_#351c15]">
                      UPS
                    </span>
                  ) : client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
