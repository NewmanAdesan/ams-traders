import SiteHeader from './components/SiteHeader/SiteHeader';
import Hero from './components/Hero/Hero';
import Supply from './components/Supply/Supply';
import Hire from './components/Hire/Hire';
import Trade from './components/Trade/Trade';
import Contact from './components/Contact/Contact';
import SiteFooter from './components/SiteFooter/SiteFooter';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  useScrollReveal();
  const activeSection = useScrollSpy(['supply', 'hire', 'trade', 'contact']);

  return (
    <>
      <SiteHeader activeSection={activeSection} />
      <main id="top">
        <Hero />
        <Supply />
        <Hire />
        <Trade />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
