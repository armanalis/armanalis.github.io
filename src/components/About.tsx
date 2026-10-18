import React from "react";
import Icon, { IconName } from './Icon';
import '../assets/styles/About.scss';

const highlights = [
  {
    title: "AI & LLM Integration",
    body: "An LLM in Italiarena explains answers after every match.",
  },
  {
    title: "Data Pipelines",
    body: "Award-winning pipeline for 2.2M+ records at Pitti Immagine.",
  },
  {
    title: "Full-Stack Web Apps",
    body: "Built and deployed Italiarena and Semester Planner end to end.",
  },
  {
    title: "Leadership",
    body: "Reply Student Ambassador: 8+ events for 200+ students.",
  },
];

// Chip text is Title Case; brand names keep their official spelling (n8n, macOS, gpt-oss-120b).
const stacks: { label: string; items: [string, IconName?][] }[] = [
  {
    label: "Programming Languages",
    items: [["Python", "python"], ["SQL"], ["TypeScript", "typescript"], ["C++", "cplusplus"], ["C", "c"], ["Java", "java"], ["MATLAB"]],
  },
  {
    label: "AI & Machine Learning",
    items: [["LLM APIs (Groq, gpt-oss-120b)"], ["RAG"], ["Embeddings"], ["Vector Search"], ["AutoML"], ["Machine Learning"]],
  },
  {
    label: "Data & Databases",
    items: [["PostgreSQL", "postgresql"], ["MySQL", "mysql"], ["Supabase", "supabase"], ["Redis", "redis"], ["Streamlit", "streamlit"]],
  },
  {
    label: "Web & Cloud",
    items: [["React", "react"], ["Next.js", "nextjs"], ["Vercel", "vercel"], ["Tailwind CSS", "tailwind"]],
  },
  {
    label: "Tools & Platforms",
    items: [["Git", "git"], ["GitHub Actions", "githubActions"], ["Docker", "docker"], ["n8n", "n8n"], ["Linux", "linux"], ["macOS", "apple"]],
  },
  {
    label: "Advanced Knowledge",
    items: [["Algorithms & Data Structures"], ["OOP & SOLID Design"], ["Networking (TCP/IP, UDP, OSI)"]],
  },
  {
    label: "Spoken Languages",
    items: [["Turkish · Native"], ["English · Full Professional"], ["Italian · Limited Working"]],
  },
];

function About() {
  return (
    <section className="section about-section reveal" id="about">
      <div className="section-head">
        <span className="section-index">01</span>
        <h1>About</h1>
        <p className="section-lede">
          MSc Data Science &amp; Engineering at Politecnico di Torino — targeting AI and data science roles.
        </p>
      </div>

      <div className="about-layout">
        <div className="about-intro glass-soft">
          <p>
            I'm an MSc Data Science &amp; Engineering student at Politecnico di Torino with hands-on experience in LLM applications, AutoML and Python data pipelines (2.2M+ records), plus working knowledge of retrieval-augmented generation (RAG) and vector search.
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
                <ul className="chip-list">
                  {stack.items.map(([name, logo]) => (
                    <li key={name} className="chip">
                      {logo && <Icon name={logo} />}
                      {name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
