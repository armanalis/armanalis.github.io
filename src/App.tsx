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
import Blog from './components/Blog';
import BlogPreview from './components/BlogPreview';
import PostPage from './components/PostPage';
import { postBySlug } from './content';

// Pages are plain URLs (/blog, /blog/<slug>, /<slug>); links are full page loads.
function currentPage() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    if (path === '/blog') return { kind: 'blog' as const };
    const match = path.match(/^\/(?:blog\/)?([a-z0-9-]+)$/);
    const post = match ? postBySlug(match[1]) : undefined;
    if (post) return { kind: 'post' as const, post };
    return { kind: 'home' as const };
}

function App() {
    const [mode, setMode] = useState<'dark' | 'light'>('dark');
    const [page] = useState(currentPage);

    useEffect(() => {
        if (page.kind === 'post') document.title = `${page.post.title} | Ali Arman Dai`;
        if (page.kind === 'blog') document.title = 'Blog | Ali Arman Dai';
        // Links from other pages land on /#section.
        const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
        if (target) target.scrollIntoView();
        else window.scrollTo({top: 0, left: 0});
      }, [page]);

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
          {page.kind === 'home' && (
            <>
              <Main/>
              <About/>
              <Experience/>
              <Timeline/>
              <Project/>
              <BlogPreview/>
              <Awards/>
              <Contact/>
            </>
          )}
          {page.kind === 'blog' && <Blog/>}
          {page.kind === 'post' && <PostPage post={page.post}/>}
          <Footer />
        </div>
    </div>
    );
}

export default App;
