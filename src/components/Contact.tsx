import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <section className="section contact-section reveal" id="contact">
      <div className="section-head">
        <span className="section-index">06</span>
        <h1>Contact</h1>
        <p className="section-lede">Open to opportunities, collaborations, and interesting conversations.</p>
      </div>

      <div className="contact-panel glass-soft">
        <p className="contact-line">Get in touch</p>
        <a className="contact-email" href="mailto:armanalis1905@gmail.com">
          armanalis1905@gmail.com
        </a>
        <a className="btn-primary contact-cta" href="mailto:armanalis1905@gmail.com">
          <EmailIcon fontSize="small" />
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
