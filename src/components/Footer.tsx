import React from "react";
import Icon from './Icon';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">Ali Arman Dai</p>
        <div className="footer-links">
          <a href="https://github.com/armanalis" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          <a href="https://www.linkedin.com/in/ali-arman-dai/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
        </div>
        <p className="footer-note">Designed &amp; built by Ali Arman Dai</p>
      </div>
    </footer>
  );
}

export default Footer;
