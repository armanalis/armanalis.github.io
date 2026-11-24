import React, { useEffect, useRef, useState } from "react";
import type { Lang, Post } from "../content";
import { formatDate } from "../content";
import LangSwitch from "./LangSwitch";
import "../assets/styles/Blog.scss";

const text = {
  en: { all: "All posts", projects: "All projects", read: "min read", open: "Open site" },
  tr: { all: "Tüm yazılar", projects: "Tüm projeler", read: "dk okuma", open: "Siteyi aç" },
};

// ?lang=tr in the URL wins, then the last choice, then English.
function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "tr" || fromUrl === "en") return fromUrl;
  try {
    return window.localStorage.getItem("blog-lang") === "tr" ? "tr" : "en";
  } catch {
    return "en";
  }
}

function PostPage({ post }: { post: Post }) {
  const [lang, setLang] = useState<Lang>(() => (post.tr ? initialLang() : "en"));
  const [minutes, setMinutes] = useState(1);
  const bodyRef = useRef<HTMLElement>(null);
  const t = text[lang];
  const tr = lang === "tr" ? post.tr : undefined;

  const changeLang = (next: Lang) => {
    setLang(next);
    try {
      window.localStorage.setItem("blog-lang", next);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    const words = bodyRef.current?.textContent?.trim().split(/\s+/).length ?? 0;
    setMinutes(Math.max(1, Math.round(words / 200)));
    return () => {
      document.documentElement.lang = "en";
    };
  }, [lang]);

  return (
    <main className="section post-page">
      <div className="post-topbar">
        <a className="project-link post-back" href="/blog">← {t.all}</a>
        {post.tr && <LangSwitch lang={lang} onChange={changeLang} />}
      </div>

      <header className="post-header">
        {/* lang="en": uppercase Turkish would turn "Swift" into "SWİFT". */}
        <span className="post-meta" lang="en">{post.tags.join(" · ")}</span>
        <h1>{post.title}</h1>
        <p className="section-lede">{tr ? tr.summary : post.summary}</p>
        <p className="post-byline">
          <span className="post-author">Ali Arman Dai</span>
          <span>
            {formatDate(post.date, lang)} · {minutes} {t.read}
          </span>
        </p>
        {(post.live || post.github) && (
          <div className="post-actions">
            {post.live && (
              <a className="btn-primary" href={post.live} target="_blank" rel="noreferrer">
                {(tr && tr.liveLabel) || post.liveLabel || t.open}
              </a>
            )}
            {post.github && (
              <a className="btn-ghost" href={post.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        )}
      </header>

      {post.cover && (
        <figure className="post-cover glass-soft">
          <img src={post.cover} alt={post.coverAlt ?? post.title} />
        </figure>
      )}

      <article className="post-body" ref={bodyRef} lang={lang}>
        {tr ? tr.body : post.body}
      </article>

      <footer className="post-footer">
        <a className="project-link" href="/blog">← {t.all}</a>
        <a className="project-link" href="/#projects">{t.projects}</a>
      </footer>
    </main>
  );
}

export default PostPage;
