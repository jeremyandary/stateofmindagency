import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import FeaturedWork from './components/FeaturedWork';
import About from './components/About';
import Clients from './components/Clients';
import Philosophy from './components/Philosophy';
import Capabilities from './components/Capabilities';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-[#f9f4ef]">
      <Hero />
      <MissionVision />
      <FeaturedWork />
      <About />
      <Clients />
      <Philosophy />
      <Capabilities />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
