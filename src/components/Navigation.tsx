import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { scrollToSection as scrollToId } from "../scroll";

export const navItems = [
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Blog', 'blog'],
  ['Contact', 'contact']
];

type Props = { mode: 'dark' | 'light'; modeChange: () => void };

function Navigation({ mode, modeChange }: Props) {
  const drawerRef = useRef<HTMLDialogElement>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // No behavior option: html { scroll-behavior } decides, so reduced motion is respected.
  // On the blog pages the sections don't exist: Blog goes to /blog, the rest back to the home page.
  const scrollToSection = (section: string) => {
    if (scrollToId(section)) return;
    if (section === 'blog') window.location.href = '/blog';
    else window.location.href = section === 'home' ? '/' : `/#${section}`;
  };

  const openDrawer = () => {
    drawerRef.current?.showModal();
    setDrawerOpen(true);
  };

  // Close before scrolling so the page is no longer scroll-locked.
  const goTo = (section: string) => {
    drawerRef.current?.close();
    scrollToSection(section);
  };

  return (
    <>
      <header id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <nav className="navigation-bar">
          <button
            className="nav-menu-btn"
            aria-label="open drawer"
            aria-controls="nav-drawer"
            aria-expanded={drawerOpen}
            onClick={openDrawer}
          >
            <Icon name="menu" />
          </button>
          <button className="nav-brand" onClick={() => scrollToSection('home')}>
            Ali Arman Dai
          </button>
          <div className="nav-links">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollToSection(id)}>
                {label}
              </button>
            ))}
          </div>
          <button className="nav-mode-btn" onClick={modeChange} aria-label="toggle color mode">
            <Icon name={mode === 'dark' ? 'lightMode' : 'darkMode'} />
          </button>
        </nav>
      </header>
      {/* A click anywhere, backdrop included, closes the drawer, as before. */}
      <dialog
        id="nav-drawer"
        ref={drawerRef}
        className="nav-drawer navigation-bar-responsive"
        onClick={() => drawerRef.current?.close()}
        onClose={() => setDrawerOpen(false)}
      >
        <p className="mobile-menu-top"><Icon name="list" />Menu</p>
        <hr />
        <ul>
          {navItems.map(([label, id]) => (
            <li key={id}>
              <button onClick={() => goTo(id)}>{label}</button>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}

export default Navigation;
