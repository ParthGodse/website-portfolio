import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero, { HeroMobile } from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Simple breakpoint hook (md = 768px)
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true; // SSR-safe default
    return window.matchMedia('(min-width: 768px)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setIsMdUp(mq.matches);
    // Initialize & listen
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isMdUp;
}

function App() {
  const mdUp = useIsMdUp();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Render exactly ONE hero to avoid duplicate #home ids */}
      {mdUp ? <Hero /> : <HeroMobile />}

      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
