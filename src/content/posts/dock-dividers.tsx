import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/dock-dividers.webp";
import editor from "../../assets/images/dock-dividers-editor.webp";

const post: Post = {
  slug: "dock-dividers",
  title: "Dock Dividers",
  date: "2026-11-22",
  summary: "A small macOS app that puts native-looking divider lines anywhere in the Dock, so you can group your apps.",
  tags: ["macOS", "Swift", "SwiftUI", "Accessibility API"],
  cover,
  coverAlt: "macOS Dock with a thin divider line between Calculator and Weather",
  github: "https://github.com/armanalis/dock-dividers",
  live: "https://dock-dividers.armanalis.workers.dev",
  liveLabel: "Download Dock Dividers",
  body: (
    <>
      <h2>Why I built it</h2>
      <p>
        My Dock kept growing: browsers, chat apps, editors and system tools all sat in one long row. macOS
        draws exactly one separator (before the Trash) and gives you no way to add your own, so finding an app
        meant scanning the whole Dock every time. I wanted to group apps the way I think about them, with a
        clean line between each group, and without the line looking like a hack.
      </p>

      <h2>How it solves it</h2>
      <p>
        You open the app, drag a divider between any two apps in a simple list, and press{" "}
        <strong>Apply to Dock</strong>. The Dock gets a thin line that looks just like Apple's own separator and
        follows light and dark mode.
      </p>
      <figure>
        <img src={editor} alt="Editor window with Dock apps in a list and a divider row between Calculator and Weather" loading="lazy" />
        <figcaption>Every Dock app and divider in one list. Drag, then Apply to Dock.</figcaption>
      </figure>

      <h2>How it works</h2>
      <ol>
        <li>
          <strong>Add Divider</strong> inserts Apple's own <code>small-spacer-tile</code> into the Dock: a
          half-icon-wide gap.
        </li>
        <li>
          The app reads each spacer's position through the Accessibility API (<code>AXSpacerDockItem</code>).
        </li>
        <li>
          A transparent, click-through window draws a thin line over each spacer, styled like the built-in
          separator.
        </li>
      </ol>
      <p>
        It works with the Dock at the bottom, left or right; on a side Dock the lines are horizontal. While a
        window is open it behaves like a normal app; close it and only a menu bar icon stays. Settings has
        language (English / Türkçe), Open at Login, Keep Lines After Quitting and the Accessibility status.
      </p>

      <h2>Limits</h2>
      <ul>
        <li>Lines follow the Dock 3 times per second, so they lag behind Dock magnification.</li>
      </ul>

      <h2>Try it</h2>
      <p>macOS 13+, Apple Silicon and Intel:</p>
      <pre>
        <code>curl -fsSL https://dock-dividers.armanalis.workers.dev/install.sh | sh</code>
      </pre>
      <p>
        Then allow it in <strong>System Settings → Privacy &amp; Security → Accessibility</strong>, so it can read
        where the Dock's icons are.
      </p>
    </>
  ),
};

export default post;
