import React, { useState, useEffect } from "react";

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

      <style jsx>{`
        .app__header {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: white;
        }

        .bg-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 5%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          top: 60%;
          right: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .app__header-content {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 20px 60px;
          position: relative;
          z-index: 2;
        }

        .content-wrapper {
          animation: slideInLeft 1s ease-out;
        }

        .app__header-content-title {
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .app__header-content-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .app__header-content-subtitle {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.9);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }

        .app__header-content-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-primary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .btn-primary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }

        .hero_image {
          position: relative;
          animation: slideInRight 1s ease-out;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero_image img {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .hero_image img:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .image-fallback {
          display: none;
        }

        .hero_image.show-fallback .image-fallback {
          display: flex;
        }

        .fallback-device {
          width: 300px;
          height: 400px;
          background: linear-gradient(145deg, #f0f0f0, #cacaca);
          border-radius: 25px;
          padding: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .device-screen {
          width: 100%;
          height: 100%;
          background: #1a1a1a;
          border-radius: 15px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .content-bar {
          height: 12px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 6px;
          animation: pulse 2s ease-in-out infinite;
        }

        .content-bar.short {
          width: 60%;
        }

        .content-circle {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          margin-top: auto;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .floating-element {
          position: absolute;
          animation: floatElement 3s ease-in-out infinite;
        }

        .element-1 {
          top: 10%;
          right: -10%;
          animation-delay: 0s;
        }

        .element-2 {
          bottom: 15%;
          left: -10%;
          animation-delay: 1.5s;
        }

        @keyframes floatElement {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          min-width: 100px;
        }

        .stat-number {
          display: block;
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .app__grid {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 40px 0;
          position: relative;
          z-index: 2;
        }

        .app__specs {
          max-width: 1200px;
          margin: 0 auto 40px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .specification-item {
          gap: 20px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .specification-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .spec-number {
          font-size: 32px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.6);
          min-width: 60px;
        }

        .spec-icon {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spec-content {
          flex: 1;
        }

        .spec-tagline {
          font-size: 18px;
          font-weight: 600;
          color: white;
          margin: 0 0 8px 0;
        }

        .spec-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.5;
        }

        .app__btn {
          text-align: center;
          padding: 0 20px;
        }

        .discover_more {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .discover_more:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .discover_more:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .app__header-content {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 80px 20px 40px;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .btn-primary,
          .btn-secondary {
            padding: 14px 28px;
            font-size: 14px;
          }

          .app__specs {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 30px;
          }

          .specification-item {
            padding: 20px;
            text-align: center;
            flex-direction: column;
          }

          .spec-number {
            min-width: auto;
          }

          .floating-element {
            display: none;
          }

          .fallback-device {
            width: 250px;
            height: 300px;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
