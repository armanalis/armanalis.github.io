import React from "react";
import type { Post } from "../types";
import cover from "../../assets/images/check-updates.webp";
import settings from "../../assets/images/check-updates-settings.webp";

const post: Post = {
  slug: "check-updates",
  title: "Check Updates",
  date: "2026-11-21",
  summary: "Checks every app on your Mac or Windows PC for updates and updates them with one click. Free.",
  tags: ["macOS", "Windows", "Swift", "C#", "Homebrew", "winget"],
  cover,
  coverAlt: "Check Updates main window: list of apps with installed and latest versions and Update buttons",
  github: "https://github.com/armanalis/check-updates",
  live: "https://check-updates.armanalis.workers.dev",
  liveLabel: "Download Check Updates",
  body: (
    <>
      <h2>Why I built it</h2>
      <p>
        Every app updates in its own way. Some come from the App Store, some have their own updater, some only
        update when you open them, and some never tell you at all. Keeping a computer up to date meant opening
        apps one by one and clicking "Check for Updates" in each. I wanted one window that answers a single
        question: what is out of date, and can I fix it with one click?
      </p>

      <h2>How it solves it</h2>
      <p>
        Check Updates lists every installed app with its installed and latest version. <strong>Update All</strong>{" "}
        updates everything, or you update one app at a time. When an update fails, it says why and offers a fix
        button. Apps that need your password ask for it right away instead of failing quietly.
      </p>
      <figure>
        <img src={settings} alt="Settings window: choose App Store or web apps, language, and which apps to check" loading="lazy" />
        <figcaption>Pick what to check and hide apps you don't care about. English and Türkçe.</figcaption>
      </figure>

      <h2>How it works</h2>
      <ul>
        <li>
          <strong>Mac:</strong> latest versions come from the App Store, the Homebrew cask catalog, and the app's
          own update feed (a Sparkle feed or electron-builder's <code>app-update.yml</code>). The newest answer
          wins. Updates run through <code>brew</code>, the App Store or the app's own updater. Written in Swift
          and SwiftUI.
        </li>
        <li>
          <strong>Windows:</strong> uses <code>winget</code>, Windows' built-in package manager, which covers the
          winget catalog and the Microsoft Store. It runs elevated through UAC only when needed. Written in C#
          (WinForms) on .NET Framework 4.8, so the 60 KB <code>.exe</code> runs without installing anything.
        </li>
      </ul>
      <p>
        Nothing is sent anywhere except version lookups: on Mac to Apple, Homebrew and the apps' own feeds; on
        Windows through winget to Microsoft's catalogs.
      </p>

      <h2>Try it</h2>
      <p>Mac (macOS 13+), in Terminal:</p>
      <pre>
        <code>curl -fsSL https://check-updates.armanalis.workers.dev/install.sh | sh</code>
      </pre>
      <p>Windows 10 and 11, in PowerShell (no admin needed):</p>
      <pre>
        <code>irm https://check-updates.armanalis.workers.dev/install.ps1 | iex</code>
      </pre>
    </>
  ),
};

export default post;
