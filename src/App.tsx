import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { TrustBar } from './sections/TrustBar';
import { AreasAtuacao } from './sections/AreasAtuacao';
import { Sobre } from './sections/Sobre';
import { Advogado } from './sections/Advogado';
import { RegistroVisual } from './sections/RegistroVisual';
import { Metodologia } from './sections/Metodologia';
import { Artigos } from './sections/Artigos';
import { Contato } from './sections/Contato';
import { Footer } from './sections/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="min-h-[100dvh]">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <AreasAtuacao />
        <Sobre />
        <Advogado />
        <RegistroVisual />
        <Metodologia />
        <Artigos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
