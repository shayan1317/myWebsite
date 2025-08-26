import React, { useState } from "react";
import "./portfolio.css";
// Mock Heading component
const Heading = ({ flag, small_title, large_title }) => (
  <div className="heading-container">
    <p className="small-title">{small_title}</p>
    <h2 className="large-title">{large_title}</h2>
  </div>
);

function Portfolio() {
  const flag = true;
  const [activeFilter, setActiveFilter] = useState("All");

  // Portfolio items with reliable image sources and categories
  const portfolioItems = [
    {
      id: 1,
      image: "https://picsum.photos/400/300?random=1",
      category: "Web Design",
      title: "Modern E-commerce Website",
      description: "Responsive online store with modern UI/UX",
    },
    {
      id: 2,
      image: "https://picsum.photos/400/300?random=2",
      category: "Graphic Design",
      title: "Brand Identity Package",
      description: "Complete branding solution for startup",
    },
    {
      id: 3,
      image: "https://picsum.photos/400/300?random=3",
      category: "Photography",
      title: "Product Photography",
      description: "Professional product shots for catalog",
    },
    {
      id: 4,
      image: "https://picsum.photos/400/300?random=4",
      category: "Brand Identity",
      title: "Logo & Visual Identity",
      description: "Complete brand identity system",
    },
    {
      id: 5,
      image: "https://picsum.photos/400/300?random=5",
      category: "Web Design",
      title: "Portfolio Website",
      description: "Creative portfolio for digital artist",
    },
    {
      id: 6,
      image: "https://picsum.photos/400/300?random=6",
      category: "Printing",
      title: "Marketing Materials",
      description: "Brochures, flyers, and print design",
    },
    {
      id: 7,
      image: "https://picsum.photos/400/300?random=7",
      category: "Graphic Design",
      title: "Social Media Graphics",
      description: "Engaging social media content design",
    },
    {
      id: 8,
      image: "https://picsum.photos/400/300?random=8",
      category: "Photography",
      title: "Event Photography",
      description: "Corporate event documentation",
    },
  ];

  const categories = [
    "All",
    "Graphic Design",
    "Brand Identity",
    "Photography",
    "Web Design",
    "Printing",
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "flex";
  };

  return (
    <div className="app__portfolio">
      <Heading
        flag={flag}
        small_title="OUR WORK"
        large_title="See Our Online Portfolio"
      />

      <ul className="portfolio-list">
        {categories.map((category) => (
          <li
            key={category}
            className={activeFilter === category ? "active" : ""}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <div className="portfolio-image">
              <img
                src={item.image}
                alt={item.title}
                onError={handleImageError}
              />
              <div className="image-fallback">
                <div className="fallback-content">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-description">{item.description}</p>
                  <span className="project-category">{item.category}</span>
                  <div className="action-buttons">
                    <button className="view-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      View
                    </button>
                    <button className="link-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
