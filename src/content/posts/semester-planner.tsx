import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/semester-planner.webp";
import coursePage from "../../assets/images/semester-planner-course.webp";

const post: Post = {
  slug: "semester-planner",
  title: "Semester Planner",
  date: "2026-10-04",
  summary: "I kept getting lost in Polito's calendar, so I built a planner for lectures, course notes, study blocks and focus time.",
  tags: ["React", "TypeScript", "Vite", "Vercel", "Redis", "OCR"],
  cover,
  coverAlt: "Semester Planner weekly calendar",
  github: "https://github.com/armanalis/semester-planner",
  live: "https://semester-planner-five.vercel.app/",
  liveLabel: "Open Semester Planner",
  body: (
    <>
      <p>
        I made this app because of a problem I've had since I joined Politecnico di Torino in 2022. Me and lots
        of my friends have suffered from the same issue: it's really easy to get lost in Polito's calendar.
      </p>
      <p>
        The job of this app is to make following lectures easier and to keep notes for each course. Every course
        has its own page where you can add the exam date and some more information about the course, and, most
        importantly (probably), take notes during and after the lecture.
      </p>
      <figure>
        <img
          src={coursePage}
          alt="Course page for Information Theory for Data Science with exam date, to-dos, a project, study blocks and timetable"
          loading="lazy"
        />
        <figcaption>One of my course pages.</figcaption>
      </figure>
      <p>
        You can see your weekly calendar with your courses, remove the ones you don't need, and add your
        meetings, activities, or even study blocks where you will study for that course (for sure!!!). You can
        also sync your devices with each other; I use it on both my phone and my laptop.
      </p>
      <p>
        I also added a focus timer. The default is pomodoro (I mostly use 50-10), and there are some statistics
        for fun: how many hours you studied, your streaks, how many to-dos you finished and so on.
      </p>

      <h2>A few more things</h2>
      <ul>
        <li>
          You don't have to type your timetable in. Upload a screenshot of your weekly schedule and it turns into
          your classes. It's read right in your browser, for free, and nothing is sent anywhere.
        </li>
        <li>If you skip a class, it adds a catch-up to-do so you don't forget to make up for it.</li>
        <li>Notes support Markdown and LaTeX, so formulas actually look like formulas.</li>
        <li>There's a weekly review page to look back at how the week went.</li>
        <li>
          Your data stays in your browser, and there's a Backup button if you want a copy. English and Turkish,
          light and dark mode.
        </li>
      </ul>
      <p>
        I built it around my Data Science and Engineering program, but it works for any program. If you're at
        Polito too, give it a try.
      </p>
    </>
  ),
};

export default post;
