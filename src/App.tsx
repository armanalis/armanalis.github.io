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
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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

      const observeAll = () => {
        document.querySelectorAll('.reveal:not(.is-visible)').forEach((node) => observer.observe(node));
      };

      observeAll();
      const timer = window.setTimeout(observeAll, 800);
      return () => {
        observer.disconnect();
        window.clearTimeout(timer);
      };
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <div className="aurora-bg" aria-hidden="true" />
        <div className="site-content">
          <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
          <FadeIn transitionDuration={700}>
              <Main/>
              <About/>
              <Experience/>
              <Timeline/>
              <Project/>
              <Awards/>
              <Contact/>
          </FadeIn>
          <Footer />
        </div>
    </div>
    );
}

export default App;
