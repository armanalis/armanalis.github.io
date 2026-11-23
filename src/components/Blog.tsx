import React from "react";
import { posts, postUrl, formatDate } from "../content";
import "../assets/styles/Project.scss";
import "../assets/styles/Blog.scss";

// Same cards as the Projects section, so the blog looks like the rest of the site.
function Blog() {
  return (
    <main className="section projects-section blog-page reveal">
      <div className="section-head">
        <span className="section-index">Blog</span>
        <h1>Blog</h1>
        <p className="section-lede">Why I built my projects, what problem each one solves, and how it works.</p>
      </div>

      <div className="projects-grid">
        {posts.map((post) => (
          <article key={post.slug} className="project glass-soft">
            {post.cover && (
              <a href={postUrl(post.slug)} className="project-media">
                <img src={post.cover} alt={post.coverAlt ?? post.title} loading="lazy" />
              </a>
            )}
            <div className="project-body">
              <span className="post-meta">{formatDate(post.date)}</span>
              <a href={postUrl(post.slug)}>
                <h2>{post.title}</h2>
              </a>
              <p>{post.summary}</p>
              <div className="project-links">
                <a className="project-link" href={postUrl(post.slug)}>Read more</a>
                {post.live && (
                  <a className="project-link" href={post.live} target="_blank" rel="noreferrer">
                    {post.liveLabel ?? "Open site"}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Blog;
