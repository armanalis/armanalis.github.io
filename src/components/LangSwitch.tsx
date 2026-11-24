import React from "react";
import type { Lang } from "../content";

// Inline SVG flags: emoji flags show as plain letters on Windows.
const flags: Record<Lang, JSX.Element> = {
  en: (
    <svg viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id="flag-uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="flag-uk-diag">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#flag-uk-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#flag-uk-diag)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  ),
  tr: (
    <svg viewBox="0 0 60 40" aria-hidden="true">
      <rect width="60" height="40" fill="#E30A17" />
      <circle cx="21" cy="20" r="10" fill="#fff" />
      <circle cx="23.5" cy="20" r="8" fill="#E30A17" />
      <path
        fill="#fff"
        d="M31.8 20 l9.2 -3 -5.7 7.8 0 -9.6 5.7 7.8 z"
      />
    </svg>
  ),
};

const labels: Record<Lang, string> = { en: "English", tr: "Türkçe" };

function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {(["en", "tr"] as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          className={code === lang ? "is-active" : undefined}
          aria-pressed={code === lang}
          aria-label={labels[code]}
          title={labels[code]}
          onClick={() => onChange(code)}
        >
          {flags[code]}
        </button>
      ))}
    </div>
  );
}

export default LangSwitch;
