import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import "../assets/styles/BlogNav.scss";

type Props = { mode: "dark" | "light"; modeChange: () => void; showProgress: boolean };

const RADIUS = 9;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Floating bar on the blog pages; on a post, the ring at the end fills as you read.
function BlogNav({ mode, modeChange, showProgress }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!showProgress) return;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [showProgress]);

  return (
    <header className="blog-nav-wrap">
      <nav className="blog-nav" aria-label="Main">
        <a className="blog-nav-brand" href="/">Ali Arman Dai</a>

        <div className="blog-nav-links">
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/blog" className="is-active" aria-current="page">Blog</a>
          <a href="/#contact">Contact</a>
        </div>

        <span className="blog-nav-divider" aria-hidden="true" />

        <div className="blog-nav-icons">
          <a href="https://github.com/armanalis" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" small />
          </a>
          <a href="https://www.linkedin.com/in/ali-arman-dai/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" small />
          </a>
          <a href="mailto:armanalis1905@gmail.com" aria-label="Email">
            <Icon name="email" small />
          </a>
          <button type="button" onClick={modeChange} aria-label="toggle color mode">
            <Icon name={mode === "dark" ? "lightMode" : "darkMode"} small />
          </button>
        </div>

        {showProgress && (
          <>
            <span className="blog-nav-divider" aria-hidden="true" />
            <svg
              className="blog-nav-progress"
              viewBox="0 0 24 24"
              role="progressbar"
              aria-label="Reading progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress * 100)}
            >
              <circle className="track" cx="12" cy="12" r={RADIUS} />
              <circle
                className="bar"
                cx="12"
                cy="12"
                r={RADIUS}
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
              />
            </svg>
          </>
        )}
      </nav>
    </header>
  );
}

export default BlogNav;
