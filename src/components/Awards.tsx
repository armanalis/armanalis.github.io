import React from "react";
import awardPhoto from '../assets/images/award.jpeg';
import '../assets/styles/Awards.scss';

function Awards() {
  return (
    <section className="section awards-section reveal" id="awards">
      <div className="section-head">
        <span className="section-index">05</span>
        <h2>Awards</h2>
        <p className="section-lede">Recognition for applied data work in industry.</p>
      </div>

      <article className="award-panel glass-soft">
        <div className="award-media">
          <img src={awardPhoto} alt="Receiving the Premio Leonardo 2026" />
        </div>
        <div className="award-copy">
          <p className="award-date">14 / 04 / 2026</p>
          <h3>Premio Leonardo 2026</h3>
          <p className="award-org">Comitato Leonardo — Italian Quality Committee</p>
          <p>
            Awarded for work during a Data Analyst internship at Pitti Immagine.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Awards;
