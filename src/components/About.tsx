import React from "react";
import '../assets/styles/About.scss';

const highlights = [
  {
    title: "AI & LLM Integration",
    body: "Integrated an LLM (gpt-oss-120b via the Groq API) into Italiarena to explain answers after each match and pre-check questions sent in by players.",
  },
  {
    title: "Data Pipelines",
    body: "Built a memory-efficient Python/Streamlit pipeline at Pitti Immagine that processes 2.2M+ records (1.2 GB) under strict RAM limits — winner of the Comitato Leonardo Degree Award 2026.",
  },
  {
    title: "Full-Stack Web Apps",
    body: "Built italiarena.com — live 1v1 trivia with real-time match sync on Supabase — and Semester Planner, a study planner with cross-device sync on Vercel and Redis.",
  },
  {
    title: "Leadership",
    body: "Serve as a Reply Student Ambassador, driving hackathons and tech initiatives for 200+ students.",
  },
];

const stacks = [
  {
    label: "Programming languages",
    items: "Python, SQL, TypeScript, C++, C, Java, MATLAB",
  },
  {
    label: "AI & Machine Learning",
    items: "LLM APIs (Groq, gpt-oss-120b), Retrieval-Augmented Generation (RAG), embeddings, vector search, AutoML, Machine Learning",
  },
  {
    label: "Data & databases",
    items: "PostgreSQL, MySQL, Supabase (Postgres, Auth, Realtime), Redis, Streamlit",
  },
  {
    label: "Web & cloud",
    items: "React, Next.js, Vercel, Tailwind CSS",
  },
  {
    label: "Tools & platforms",
    items: "Git, GitHub Actions, Docker, n8n, Linux, macOS",
  },
  {
    label: "Advanced knowledge",
    items: "Algorithms & data structures, OOP & SOLID design, networking (TCP/IP, UDP, OSI model)",
  },
  {
    label: "Spoken languages",
    items: "Turkish (native), English (full professional), Italian (limited working)",
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
            I am an MSc Data Science &amp; Engineering student at Politecnico di Torino with working knowledge of Retrieval-Augmented Generation (RAG), embeddings and vector search, plus experience with Large Language Model (LLM) applications, AutoML and Python data pipelines processing 2.2M+ records. I have built and deployed full-stack projects, including one with an LLM integrated through the Groq API.
          </p>
          <p className="about-open">
            Open to connecting with AI researchers, data engineers, and tech leaders building next-gen data solutions.
          </p>
        </div>

        <div className="sub-block">
          <h3>Key Experience &amp; Projects</h3>
          <ul className="card-grid">
            {highlights.map((item) => (
              <li key={item.title} className="glass-soft">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="sub-block">
          <h3>Skills &amp; Languages</h3>
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
