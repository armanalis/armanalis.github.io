import React from "react";
import { posts, postUrl, formatDate } from "../content";
import "../assets/styles/Blog.scss";

// Home page section: the latest posts as a compact list, linking to /blog for the rest.
function BlogPreview() {
  return (
    <section className="section blog-preview reveal" id="blog">
      <div className="section-head">
        <span className="section-index">05</span>
        <h2>Blog</h2>
        <p className="section-lede">Why I built each project, what problem it solves, and how it works.</p>
      </div>

      <ul className="blog-list glass-soft">
        {posts.slice(0, 4).map((post) => (
          <li key={post.slug}>
            <a href={postUrl(post.slug)}>
              <span className="post-meta">{formatDate(post.date)}</span>
              <span className="blog-list-text">
                <span className="blog-list-title">{post.title}</span>
                <span className="blog-list-summary">{post.summary}</span>
              </span>
              <span className="blog-list-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>

      <a className="btn-ghost blog-all" href="/blog">All posts →</a>
    </section>
  );
}

export default BlogPreview;
