import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import AramarkCaseStudy from '../components/AramarkCaseStudy';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function AramarkCaseStudyPage() {
  return (
    <div id="top" className="min-h-screen bg-black text-[#f9f4ef]">
      <header className="flex items-center justify-between px-6 py-6 text-sm text-[#f9f4ef] md:px-10 md:py-7">
        <a href="/" className="block transition-opacity hover:opacity-75">
          <img
            src="/SOM_Brain_Logo_v2_WHT copy.png"
            alt="State of Mind Productions"
            className="h-auto w-36 md:w-48"
          />
        </a>

        <nav className="flex items-center gap-6 md:gap-8">
          <a href="/#work" className="group hidden items-center gap-2 transition-opacity hover:opacity-60 sm:flex">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All work
          </a>
          <a href="#contact" className="group flex items-center gap-2 transition-opacity hover:opacity-60 text-white">
            Let's talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </nav>
      </header>

      <main>
        <AramarkCaseStudy />
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
