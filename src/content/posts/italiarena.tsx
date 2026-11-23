import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/language-quiz.webp";

const post: Post = {
  slug: "italiarena",
  title: "Italiarena",
  date: "2026-05-18",
  summary: "Live 1v1 language quiz matches and daily word games in Italian and German. Practice that feels like a game, not homework.",
  tags: ["Next.js", "Supabase", "Realtime", "LLM", "Groq"],
  cover,
  coverAlt: "Italiarena quiz game",
  github: "https://github.com/armanalis/italiarena",
  live: "https://italiarena.com",
  liveLabel: "Play Italiarena",
  body: (
    <>
      <h2>Why I built it</h2>
      <p>
        I moved to Turin as an international student, and Italian was the hardest part. Every app I tried felt
        like homework, so I stopped using them. Italiarena is the practice I actually wanted: quick, competitive
        matches instead of flashcards. It's for anyone landing in Italy who needs to pick up the language fast.
      </p>

      <h2>How it solves it</h2>
      <ul>
        <li>
          <strong>Short matches:</strong> ten timed questions per round on grammar, vocabulary, fill-in-the-blank
          and idioms. Faster correct answers score more.
        </li>
        <li>
          <strong>Real opponents:</strong> matchmaking by language and level (CEFR A1–C1), or an instant bot match
          so you never wait.
        </li>
        <li>
          <strong>Daily games:</strong> Wordle, Word Wheel and a 60-second article sprint (der·die·das /
          il·lo·la).
        </li>
        <li>
          <strong>Learn from mistakes:</strong> a review after each match, mistakes that come back on spaced
          review days, pronunciation, and optional AI explanations (gpt-oss-120b via the Groq API).
        </li>
        <li>
          <strong>Friends and reminders:</strong> challenges, today's scores side by side, and opt-in push
          reminders. It installs to the home screen like an app.
        </li>
      </ul>

      <h2>How it works</h2>
      <p>
        Next.js on Vercel, backed by Supabase (Postgres, Auth, Realtime). There is no separate game server: a{" "}
        <code>game_sessions</code> row <em>is</em> the match, and both players' browsers stay in sync with it.
      </p>
      <ul>
        <li>
          State reaches the other player three ways at once: a realtime broadcast, a database-change subscription,
          and a 1.5-second poll as a fallback. Losing one message costs a poll cycle, not a stuck match.
        </li>
        <li>
          Round timing is stamped by Postgres, not by either phone, so skewed device clocks still flip screens at
          the same moment.
        </li>
        <li>
          Answers and scores are computed on the server, so a tampered client can't write a fake score.
        </li>
      </ul>
    </>
  ),
};

export default post;
