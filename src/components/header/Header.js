import React, { useState, useEffect } from "react";
import "./header.css";
// Mock Specification component
const Specification = ({ tagline, flag, number, icon }) => (
  <div className="specification-item">
    <div className="spec-number">{number}</div>
    <div className="spec-icon">{icon}</div>
    <h3 style={{ textAlign: "center" }} className="spec-tagline">
      {tagline}
    </h3>
    <p
      style={{ textAlign: "center", color: "#2d3748" }}
      className="spec-description"
    >
      {tagline === "No 1 in Sales" &&
        "Leading the market with proven results and exceptional customer satisfaction rates."}
      {tagline === "Online Marketing" &&
        "Strategic digital marketing solutions that drive engagement and conversions."}
      {tagline === "Modern Design" &&
        "Contemporary design principles that captivate and inspire your audience."}
    </p>
  </div>
);

// Icon components
const TrophyIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9C6 10.45 6.39 11.78 7.07 12.96C7.75 14.14 8.76 15.08 10 15.66L10 17C10 18.1 10.9 19 12 19C13.1 19 14 18.1 14 17L14 15.66C15.24 15.08 16.25 14.14 16.93 12.96C17.61 11.78 18 10.45 18 9L18 3C18 2.45 17.55 2 17 2L7 2C6.45 2 6 2.45 6 3L6 9Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M6 9H4C3.45 9 3 8.55 3 8C3 7.45 3.45 7 4 7H6M18 9H20C20.55 9 21 8.55 21 8C21 7.45 20.55 7 20 7H18"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const MarketingIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const DesignIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.24 12.24C21.3537 11.1263 21.9985 9.6304 21.9985 8.07502C21.9985 6.51964 21.3537 5.02369 20.24 3.91002C19.1263 2.79636 17.6304 2.15156 16.075 2.15156C14.5196 2.15156 13.0237 2.79636 11.91 3.91002L12 4L12.09 3.91002C10.9763 2.79636 9.48041 2.15156 7.92503 2.15156C6.36965 2.15156 4.8737 2.79636 3.76003 3.91002C2.64636 5.02369 2.00156 6.51964 2.00156 8.07502C2.00156 9.6304 2.64636 11.1263 3.76003 12.24L12 20.48L20.24 12.24Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

function Header() {
  const flag = true;
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    "A clean and modern template",
    "Beautiful design solutions",
    "Professional web development",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const specifications = [
    {
      tagline: "No 1 in Sales",
      number: "01",
      icon: <TrophyIcon />,
    },
    {
      tagline: "Online Marketing",
      number: "02",
      icon: <MarketingIcon />,
    },
    {
      tagline: "Modern Design",
      number: "03",
      icon: <DesignIcon />,
    },
  ];

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.parentNode.classList.add("show-fallback");
  };

  return (
    <div className="app__header">
      {/* Background Elements */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="app__header-content">
        <div className="content-wrapper">
          <h1
            className={`app__header-content-title ${
              isVisible ? "visible" : ""
            }`}
          >
            {heroTexts[currentText]}
          </h1>
          <p
            className={`app__header-content-subtitle ${
              isVisible ? "visible" : ""
            }`}
          >
            Get your free template now and start building amazing experiences
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Get Started Free
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className="btn-secondary">
              Watch Demo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hero_image">
          <img
            src="https://picsum.photos/500/400?random=device"
            alt="Modern device mockup"
            onError={handleImageError}
          />
          <div className="image-fallback">
            <div className="fallback-device">
              <div className="device-screen">
                <div className="screen-content">
                  <div className="content-bar"></div>
                  <div className="content-bar short"></div>
                  <div className="content-bar"></div>
                  <div className="content-circle"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="floating-element element-1">
            <div className="stat-card">
              <span className="stat-number">99%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
          <div className="floating-element element-2">
            <div className="stat-card">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="app__grid">
        <div className="app__specs">
          {specifications.map((spec, index) => (
            <Specification
              key={index}
              tagline={spec.tagline}
              flag={flag}
              number={spec.number}
              icon={spec.icon}
            />
          ))}
        </div>

        <div className="app__btn">
          <button className="discover_more">
            Discover More
            <span className="btn-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
