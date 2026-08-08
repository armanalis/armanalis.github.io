import React from "react";
import LeetCode from '../assets/images/LeetCode.png';
import UAVproject from '../assets/images/UAV.png';
import BudgetPlanner from '../assets/images/budget-planner.png';
import LanguageQuiz from '../assets/images/language-quiz.png';
import '../assets/styles/Project.scss';

const projects = [
  {
    href: "https://github.com/armanalis/italiarena",
    live: "https://italiarena.com",
    liveLabel: "Open Italiarena",
    img: LanguageQuiz,
    alt: "Language Quiz",
    title: "Italiarena",
    body: "Competitive multiplayer quizzes that accelerate language learning. Match by level, play 10-question rounds against real or ghost opponents, and track progress.",
  },
  {
    href: "https://github.com/armanalis/budget-planner",
    live: "https://armanalis-budgetplanner.vercel.app/",
    liveLabel: "Open Budget Planner",
    img: BudgetPlanner,
    alt: "Budget Planner",
    title: "Personal Budget Planner",
    body: "Track income, expenses, and savings goals with real-time breakdowns and monthly summaries in a clean, responsive interface.",
  },
  {
    href: "https://github.com/armanalis/opencv-gpu-tracker",
    live: null,
    liveLabel: null,
    img: UAVproject,
    alt: "UAV tracking project",
    title: "Autonomous UAV Optical Tracking",
    body: "Real-time C++ tracking resilient to lighting and occlusion — CLAHE, HSV masking, Kalman filtering, with YOLO, UDP telemetry, and Metal GPU acceleration in progress.",
  },
  {
    href: "https://github.com/armanalis/LeetCode",
    live: null,
    liveLabel: null,
    img: LeetCode,
    alt: "LeetCode practice",
    title: "Daily LeetCode Challenge",
    body: "A daily practice rhythm — at least one LeetCode problem every day to sharpen problem-solving.",
  },
];

function Project() {
  return (
    <section className="section projects-section reveal" id="projects">
      <div className="section-head">
        <span className="section-index">04</span>
        <h1>Projects</h1>
        <p className="section-lede">Selected work across learning products, finance tools, and real-time systems.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project glass-soft">
            <a href={project.href} target="_blank" rel="noreferrer" className="project-media">
              <img src={project.img} alt={project.alt} />
            </a>
            <div className="project-body">
              <a href={project.href} target="_blank" rel="noreferrer">
                <h2>{project.title}</h2>
              </a>
              <p>{project.body}</p>
              <div className="project-links">
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {project.live && (
                  <a className="project-link" href={project.live} target="_blank" rel="noreferrer">
                    {project.liveLabel}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
