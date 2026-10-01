export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 md:py-20 px-6 bg-black border-t border-[#fd8471]/20">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/SOM_Brain_Alpha.png"
          alt="State of Mind"
          className="w-24 h-24 mx-auto mb-4"
        />
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <a
            href="#about"
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
