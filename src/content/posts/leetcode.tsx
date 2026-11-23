import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/LeetCode.webp";

const post: Post = {
  slug: "leetcode",
  title: "Daily LeetCode Challenge",
  date: "2024-11-01",
  summary: "At least one LeetCode problem every day, with every solution in one repository.",
  tags: ["Algorithms", "Data structures", "Habit"],
  cover,
  coverAlt: "LeetCode practice",
  github: "https://github.com/armanalis/LeetCode",
  body: (
    <>
      <h2>Why I do it</h2>
      <p>
        Problem-solving is a skill that fades without practice. One problem a day is small enough to never skip
        and, over months, adds up to real fluency with algorithms and data structures.
      </p>

      <h2>How it works</h2>
      <p>
        Every day I solve at least one problem and push the solution to GitHub. The repository is the log: it
        keeps me consistent and shows the progress over time.
      </p>
    </>
  ),
};

export default post;
