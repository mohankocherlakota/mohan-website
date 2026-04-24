import React from 'react';

const blogPosts = [
  {
    title: "StockPick: Bringing Institutional-Grade AI Stock Analysis to Everyone",
    url: "https://mohankocherlakota.medium.com/stockpick-bringing-institutional-grade-ai-stock-analysis-to-everyone-e69b8b7278ba",
    date: "May 2024",
    description: "How I applied institutional methods — valuation models, sentiment analysis, and AI-driven risk scoring — to build a stock analysis tool accessible to retail investors.",
    readTime: "6 min read",
  },
  {
    title: "AGI: Is It in the Near Future or Far from Existence?",
    url: "https://mohankocherlakota.medium.com/agi-is-it-in-the-near-future-or-far-from-existence-20ae21036516",
    date: "April 2024",
    description: "An honest look at the technical and philosophical gaps between today's frontier LLMs and true artificial general intelligence — what's still missing and why it matters.",
    readTime: "8 min read",
  },
  {
    title: "Agentic AI: The Next Big Breakthrough in Technology and Business",
    url: "https://mohankocherlakota.medium.com/agentic-ai-the-next-big-breakthrough-in-technology-and-business-8afdc4a0c7c0",
    date: "March 2024",
    description: "A deep dive into how autonomous AI agents are reshaping business workflows — from task decomposition and tool use to multi-agent collaboration and enterprise deployment patterns.",
    readTime: "7 min read",
  }
];

function Blog() {
  return (
    <section id="blog" className="section-container">
      <h2 className="section-title">Blog & Articles</h2>
      <div className="blog-grid">
        {blogPosts.map((post, idx) => (
          <div className="blog-card" key={idx}>
            <div className="blog-content">
              <h3 className="blog-title">
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h3>
              <p className="blog-description">{post.description}</p>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="blog-more">
        <a
          href="https://medium.com/@mohankocherlakota"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-profile-link"
        >
          View all articles on Medium &rarr;
        </a>
      </div>
    </section>
  );
}

export default Blog;
