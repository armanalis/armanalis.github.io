import React from "react";
import type { Post } from "../content";
import { formatDate } from "../content";
import "../assets/styles/Blog.scss";

function PostPage({ post }: { post: Post }) {
  return (
    <main className="section post-page">
      <a className="project-link post-back" href="/blog">← All posts</a>

      <header className="post-header">
        <span className="post-meta">
          {formatDate(post.date)} · {post.tags.join(" · ")}
        </span>
        <h1>{post.title}</h1>
        <p className="section-lede">{post.summary}</p>
        {(post.live || post.github) && (
          <div className="post-actions">
            {post.live && (
              <a className="btn-primary" href={post.live} target="_blank" rel="noreferrer">
                {post.liveLabel ?? "Open site"}
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

      <article className="post-body">{post.body}</article>

      <footer className="post-footer">
        <a className="project-link" href="/blog">← All posts</a>
        <a className="project-link" href="/#projects">All projects</a>
      </footer>
    </main>
  );
}

export default PostPage;
