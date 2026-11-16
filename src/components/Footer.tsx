export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20 px-6 bg-black border-t border-[#fd8471]/20">
      <div className="max-w-4xl mx-auto text-center">
        <picture>
          {/* Visitors who turn on "reduce motion" get the still skull */}
          <source srcSet="/som-skull-still.webp" media="(prefers-reduced-motion: reduce)" />
          <img
            src="/som-skull-bounce.webp"
            alt="State of Mind"
            width={240}
            height={357}
            loading="lazy"
            decoding="async"
            className="w-24 h-auto mx-auto mb-4"
          />
        </picture>
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <a
            href="/#about"
            className="text-[#f9f4ef]/50 hover:text-[#fd8471] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[#f9f4ef]/50 hover:text-[#fd8471] transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        <p className="text-xs text-[#f9f4ef]/30">
          © {currentYear} State of Mind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
