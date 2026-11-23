import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/semester-planner.webp";

const post: Post = {
  slug: "semester-planner",
  title: "Semester Planner",
  date: "2026-10-04",
  summary: "A weekly study planner for university students: timetable, study blocks, course notes, focus timer and sync between phone and laptop.",
  tags: ["React", "TypeScript", "Vite", "Vercel", "Redis", "OCR"],
  cover,
  coverAlt: "Semester Planner weekly calendar",
  github: "https://github.com/armanalis/semester-planner",
  live: "https://semester-planner-five.vercel.app/",
  liveLabel: "Open Semester Planner",
  body: (
    <>
      <h2>Why I built it</h2>
      <p>
        I built it for my Data Science MSc at Politecnico di Torino. My timetable, to-dos, notes and study plan
        lived in different places, and none of them knew about the others. I wanted one place that shows the week:
        my classes, when I'll study, and what's left for each course. It works for any program.
      </p>

      <h2>How it solves it</h2>
      <ul>
        <li>
          <strong>Week planner:</strong> your timetable plus study blocks. Drag to plan, move or resize a block.
          Skip a class this week and it adds a catch-up to-do.
        </li>
        <li>
          <strong>Course pages:</strong> to-dos, projects with steps, notes with Markdown and LaTeX, topics with
          review reminders, links.
        </li>
        <li>
          <strong>Focus timer</strong>, a <strong>weekly review</strong> and <strong>statistics</strong>.
        </li>
        <li>
          <strong>Onboarding from a screenshot:</strong> upload a picture of your weekly timetable and it becomes
          your classes.
        </li>
        <li>English and Turkish, light and dark.</li>
      </ul>

      <h2>How it works</h2>
      <p>
        Data lives in the browser (localStorage), with a one-click backup. Timetable screenshots are read entirely
        in the browser: pixel analysis finds the colored class blocks and Tesseract (open-source OCR) reads the
        days, times and course names. No API key, no server.
      </p>
      <p>
        Sync uses a private 8-character code: create it on the laptop, scan the QR code with your phone. Synced
        data goes through a Vercel Function backed by Upstash Redis.
      </p>
    </>
  ),
};

export default post;
