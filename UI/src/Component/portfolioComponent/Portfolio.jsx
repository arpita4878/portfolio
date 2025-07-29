import React, { useState } from "react";
import portfolioData from "./PortfolioData";
import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  const categories = ["All", ...new Set(portfolioData.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <main className="portfolio-main">
      <section id="portfolio" className="portfolio section">
        <div className="container section-title">
          <h2>Portfolio</h2>
          <p>Filter by category and discover my recent projects built with React, Node.js, and more.</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab-button ${cat === activeCategory ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="gallery-grid">
          {filtered.map(item => (
            <div className="portfolio-item" key={item.id}>
              <div className="portfolio-content">
                <img src={item.imageSrc} alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="portfolio-tags">
                    {item.tags?.map(tag => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    to={item.link}
                    target="_blank"
                    className="preview-link"
                    rel="noopener noreferrer"
                  >
                     Preview
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
