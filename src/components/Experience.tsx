import React from "react";
import '../assets/styles/Experience.scss';

const experiences = [
  {
    index: "01",
    title: "Data Analyst",
    company: "Pitti Immagine",
    date: "Apr 2026 — Present",
    location: "Hybrid — Italy",
    bullets: [
      "Architected B2B Analytics Dashboard: Built a memory-optimized Python/Streamlit pipeline to process 2.2M+ records (1.2GB) within strict RAM constraints.",
      "Engineered Unique-User Tracking: Replaced legacy frameworks with a deduplicated behavioral tracking system for accurate ROI analytics and funnel insights.",
      "Optimized Pipeline Stability: Developed type-aware validation filters to resolve stream-processing bottlenecks and ensure error-free data segmentation.",
      "Automated Cleansing & Lifecycle Metrics: Created a Customer Journey Matrix to map user state transitions and automated the isolation of delivery failures for database optimization.",
    ],
  },
  {
    index: "02",
    title: "Student Ambassador",
    company: "Reply",
    date: "May 2024 — Present",
    location: "Torino, Italy",
    body: "Organized and promoted 8+ key initiatives (hackathons, coding challenges, career events) at Politecnico di Torino, driving engagement from over 200+ student participants.",
  },
];

function Experience() {
  return (
    <section className="section experience-section reveal" id="experience">
      <div className="section-head">
        <span className="section-index">02</span>
        <h1>Experience</h1>
        <p className="section-lede">Applied analytics and campus leadership — from production data pipelines to student community programs.</p>
      </div>

      <ol className="exp-list">
        {experiences.map((item) => (
          <li key={item.index} className="exp-item glass-soft">
            <div className="exp-meta">
              <span className="exp-index">{item.index}</span>
              <span className="exp-date">{item.date}</span>
              <span className="exp-location">{item.location}</span>
            </div>
            <div className="exp-body">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              {'bullets' in item && item.bullets ? (
                <ul className="exp-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.body}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
