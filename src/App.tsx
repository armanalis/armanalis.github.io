import React, {useState, useEffect} from "react";
import {
  Main,
  About,
  Timeline,
  Experience,
  Project,
  Awards,
  Contact,
  Navigation,
  Footer,
} from "./components";
import AuroraBackground from './components/AuroraBackground';

function App() {
    const [mode, setMode] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
      }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
      return () => observer.disconnect();
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <AuroraBackground />
        <div className="site-content">
          <Navigation mode={mode} modeChange={() => setMode(m => m === 'dark' ? 'light' : 'dark')}/>
          <Main/>
          <About/>
          <Experience/>
          <Timeline/>
          <Project/>
          <Awards/>
          <Contact/>
          <Footer />
        </div>
    </div>
    );
}

export default App;
