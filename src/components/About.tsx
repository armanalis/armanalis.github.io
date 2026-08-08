import React from "react";
import '../assets/styles/About.scss';

const highlights = [
  {
    title: "Data & Automation",
    body: "Built Python/Streamlit pipelines at Pitti Immagine to clean and analyze 2M+ customer records — recognized with the Premio Leonardo 2026.",
  },
  {
    title: "Computer Vision & C++ Systems",
    body: "Engineered real-time optical tracking pipelines using C++, OpenCV, and Kalman Filters, currently integrating YOLO models and GPU acceleration.",
  },
  {
    title: "Full-Stack & Web Systems",
    body: "Built italiarena.com — a multiplayer language learning platform with live 1v1 matchmaking, real-time game state synchronization, and user performance analytics.",
  },
  {
    title: "Leadership",
    body: "Serve as a Reply Student Ambassador, driving hackathons and tech initiatives for 200+ students.",
  },
];

const stacks = [
  {
    label: "Languages",
    items: "C++, Python, SQL, TypeScript/JavaScript, C, Java",
  },
  {
    label: "Domains",
    items: "AI, Data Analytics, Computer Vision, Real-Time Systems, Full-Stack Web Development",
  },
  {
    label: "Tools",
    items: "PostgreSQL, Streamlit, Docker, OpenCV, Linux, Git",
  },
];

function About() {
  return (
    <section className="section about-section reveal" id="about">
      <div className="section-head">
        <span className="section-index">01</span>
        <h1>About</h1>
        <p className="section-lede">
          MSc Data Science &amp; Engineering at Politecnico di Torino — targeting roles in AI and Data Science.
        </p>
      </div>

      <div className="about-layout">
        <div className="about-intro glass-soft">
          <p>
            I am an MSc Data Science &amp; Engineering student at Politecnico di Torino targeting roles in AI and Data Science. I focus on machine learning, real-time software systems, and automated data pipelines.
          </p>
          <p className="about-open">
            Open to connecting with AI researchers, data engineers, and tech leaders building next-gen data solutions.
          </p>
        </div>

        <div className="about-block">
          <h3>Key Experience &amp; Projects</h3>
          <ul className="about-highlights">
            {highlights.map((item) => (
              <li key={item.title} className="glass-soft">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-block">
          <h3>Core Stack &amp; Skills</h3>
          <ul className="about-stack">
            {stacks.map((stack) => (
              <li key={stack.label} className="glass-soft">
                <span className="stack-label">{stack.label}</span>
                <span className="stack-items">{stack.items}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
