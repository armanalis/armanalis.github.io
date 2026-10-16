import React from "react";
import awardPhoto from '../assets/images/award.jpeg';
import '../assets/styles/Awards.scss';

const certifications = [
  {
    title: "Machine Learning for Multiple Domains: From Concepts to Implementation (AutoML)",
    issuer: "Reply Code Challenge",
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Aspire Leaders Program",
  },
  {
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey.org",
  },
];

function Awards() {
  return (
    <section className="section awards-section reveal" id="awards">
      <div className="section-head">
        <span className="section-index">05</span>
        <h2>Awards &amp; Certifications</h2>
        <p className="section-lede">Recognition for applied data work in industry, plus certifications in machine learning, algorithms, and professional skills.</p>
      </div>

      <article className="award-panel glass-soft">
        <div className="award-media">
          <img src={awardPhoto} alt="Receiving the Comitato Leonardo Degree Award 2026" loading="lazy" />
        </div>
        <div className="award-copy">
          <p className="award-date">14 / 04 / 2026</p>
          <h3>Comitato Leonardo Degree Award 2026</h3>
          <p className="award-org">Premi Leonardo — Italian Quality Committee</p>
          <p>
            Winner — awarded for work during a Data Analyst internship at Pitti Immagine.
          </p>
        </div>
      </article>

      <div className="sub-block cert-block">
        <h3>Certifications</h3>
        <ul className="card-grid">
          {certifications.map((cert) => (
            <li key={cert.title} className="glass-soft">
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Awards;
