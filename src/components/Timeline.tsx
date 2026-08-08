import React from "react";
import '../assets/styles/Timeline.scss'

const education = [
  {
    index: "01",
    title: "MSc Data Science and Engineering",
    school: "Politecnico di Torino",
    date: "Sep 2026 — Present",
    location: "Torino, Italy",
    body: "Master's studies focused on data science, machine learning, and engineering systems that turn data into decisions.",
  },
  {
    index: "02",
    title: "B.S. Computer Engineering",
    school: "Politecnico di Torino",
    date: "2022 — Jul 2026",
    location: "Torino, Italy",
    body: "Graduated with a Bachelor's in Computer Engineering after transferring from Middle East Technical University. Built a foundation in computer science, programming, and software development.",
  },
  {
    index: "03",
    title: "B.S. Computer Engineering (Transferred)",
    school: "Middle East Technical University",
    date: "2020 — 2022",
    location: "Türkiye",
    body: "Began Computer Engineering studies at METU in Türkiye before transferring to Politecnico di Torino to continue and complete the degree.",
  },
];

function Timeline() {
  return (
    <section className="section education-section reveal" id="education">
      <div className="section-head">
        <span className="section-index">03</span>
        <h1>Education</h1>
        <p className="section-lede">From METU in Türkiye to Politecnico di Torino — engineering foundations through to data science.</p>
      </div>

      <ol className="edu-list">
        {education.map((item) => (
          <li key={item.index} className="edu-item glass-soft">
            <div className="edu-meta">
              <span className="edu-index">{item.index}</span>
              <span className="edu-date">{item.date}</span>
              <span className="edu-location">{item.location}</span>
            </div>
            <div className="edu-body">
              <h3>{item.title}</h3>
              <h4>{item.school}</h4>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Timeline;
