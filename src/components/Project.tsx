import React from "react";
import LeetCode from '../assets/images/LeetCode.webp';
import UAVproject from '../assets/images/UAV.webp';
import LanguageQuiz from '../assets/images/language-quiz.webp';
import SemesterPlanner from '../assets/images/semester-planner.webp';
import CheckUpdates from '../assets/images/check-updates.webp';
import DockDividers from '../assets/images/dock-dividers.webp';
import { postUrl } from '../content';
import '../assets/styles/Project.scss';

const projects = [
  {
    slug: "italiarena",
    href: "https://github.com/armanalis/italiarena",
    live: "https://italiarena.com",
    liveLabel: "Open Italiarena",
    img: LanguageQuiz,
    alt: "Italiarena quiz game",
    title: "Italiarena",
    body: "Live 1v1 Italian trivia where an LLM (gpt-oss-120b via the Groq API) explains answers after each match and pre-checks questions sent in by players. Level-based matchmaking (CEFR A1–C1), bot opponents and server-side scoring on Supabase keep every match fair.",
  },
  {
    slug: "semester-planner",
    href: "https://github.com/armanalis/semester-planner",
    live: "https://semester-planner-five.vercel.app/",
    liveLabel: "Open Semester Planner",
    img: SemesterPlanner,
    alt: "Semester Planner weekly calendar",
    title: "Semester Planner",
    body: "Weekly study planner for university students: drag-and-drop calendar, Markdown and LaTeX course notes, focus timer and statistics, with cross-device sync on Vercel and Redis via QR-code pairing.",
  },
  {
    slug: "check-updates",
    href: "https://github.com/armanalis/check-updates",
    live: "https://check-updates.armanalis.workers.dev",
    liveLabel: "Download",
    img: CheckUpdates,
    alt: "Check Updates app window listing apps and their versions",
    title: "Check Updates",
    body: "Checks every app on a Mac or Windows PC for updates and updates them with one click. Combines the App Store, Homebrew and each app's own update feed on Mac, and winget on Windows. Swift/SwiftUI and C#.",
  },
  {
    slug: "dock-dividers",
    href: "https://github.com/armanalis/dock-dividers",
    live: "https://dock-dividers.armanalis.workers.dev",
    liveLabel: "Download",
    img: DockDividers,
    alt: "macOS Dock with a divider line between app groups",
    title: "Dock Dividers",
    body: "Native-looking divider lines anywhere in the macOS Dock, so apps can be grouped. Uses Apple's own spacer tiles, the Accessibility API and a click-through overlay that matches light and dark mode.",
  },
  {
    slug: "uav-tracking",
    href: "https://github.com/armanalis/opencv-gpu-tracker",
    live: null,
    liveLabel: null,
    img: UAVproject,
    alt: "UAV tracking project",
    title: "Autonomous UAV Optical Tracking",
    body: "Real-time C++ tracking resilient to lighting and occlusion — CLAHE, HSV masking, Kalman filtering, with YOLO, UDP telemetry, and Metal GPU acceleration in progress.",
  },
  {
    slug: "leetcode",
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
        <p className="section-lede">Selected work across AI-powered learning products, productivity tools, and real-time systems.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project glass-soft">
            <a href={postUrl(project.slug)} className="project-media">
              <img src={project.img} alt={project.alt} loading="lazy" />
            </a>
            <div className="project-body">
              <a href={postUrl(project.slug)}>
                <h2>{project.title}</h2>
              </a>
              <p>{project.body}</p>
              <div className="project-links">
                <a className="project-link" href={postUrl(project.slug)}>
                  Read more
                </a>
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
