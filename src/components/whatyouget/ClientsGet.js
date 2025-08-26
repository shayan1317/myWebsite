import React from "react";
import { useState } from "react";

// Mock components since they're not available
const Heading = ({ flag, small_title, large_title }) => (
  <div className="heading-container">
    <p className="small-title">{small_title}</p>
    <h2 className="large-title">{large_title}</h2>
  </div>
);

const Specification = ({ tagline, img_src, icon }) => (
  <div className="specification-card">
    <div className="spec-icon">{icon}</div>
    <h3 className="spec-tagline">{tagline}</h3>
    <p className="spec-description">
      {tagline === "No 1 in sales" &&
        "Proven track record of delivering exceptional results and driving business growth."}
      {tagline === "Documentation Inside" &&
        "Comprehensive documentation and guides to help you succeed from day one."}
      {tagline === "Modern Design" &&
        "Cutting-edge design principles that captivate your audience and drive engagement."}
      {tagline === "Marketing Strategist" &&
        "Data-driven marketing strategies that deliver measurable results and ROI."}
    </p>
  </div>
);

// Icon components using SVG
const TrophyIcon = () => (
  <svg
    width="48"
    height="48"
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
    <path
      d="M8 21H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M16 13H8M16 17H8M10 9H8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DesignIcon = () => (
  <svg
    width="48"
    height="48"
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

const MarketingIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3V21L9 18L15 21L21 18V6L15 9L9 6L3 9"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path d="M9 6V18" stroke="currentColor" strokeWidth="2" />
    <path d="M15 9V21" stroke="currentColor" strokeWidth="2" />
  </svg>
);

function ClientsGet() {
  const flag = false;

  const specifications = [
    {
      tagline: "No 1 in sales",
      icon: <TrophyIcon />,
    },
    {
      tagline: "Documentation Inside",
      icon: <DocumentIcon />,
    },
    {
      tagline: "Modern Design",
      icon: <DesignIcon />,
    },
    {
      tagline: "Marketing Strategist",
      icon: <MarketingIcon />,
    },
  ];

  return (
    <div className="app__clients-get">
      <div className="app__getClients-content">
        <div className="featured_img">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Business team collaboration and success"
            className="feature-image"
          />
          <div className="image-overlay">
            <div className="play-button">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="info">
          <Heading
            flag={flag}
            small_title="CLIENTS"
            large_title="What you get if you start your business with us"
          />
          <p className="para">
            Transform your business vision into reality with our comprehensive
            suite of services. We provide end-to-end solutions that drive
            growth, enhance user experience, and establish your brand as an
            industry leader. From cutting-edge development to strategic
            marketing, we're your partner in success.
          </p>
          <div className="app_bar_chart">
            <div className="chart">
              <div className="chart-header">
                <p>Development</p>
                <span className="percentage">95%</span>
              </div>
              <div className="bar">
                <span className="fill1"></span>
              </div>
            </div>
            <div className="chart">
              <div className="chart-header">
                <p>Design</p>
                <span className="percentage">88%</span>
              </div>
              <div className="bar">
                <span className="fill2"></span>
              </div>
            </div>
            <div className="chart">
              <div className="chart-header">
                <p>SEO</p>
                <span className="percentage">92%</span>
              </div>
              <div className="bar">
                <span className="fill3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app__grid_clients">
        <div className="clients_grid_box">
          {specifications.map((spec, index) => (
            <Specification
              key={index}
              tagline={spec.tagline}
              icon={spec.icon}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .app__clients-get {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 80px 0;
        }

        .app__getClients-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        .featured_img {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .featured_img:hover {
          transform: translateY(-10px);
        }

        .feature-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .featured_img:hover .image-overlay {
          opacity: 1;
        }

        .play-button {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .play-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .info {
          padding: 20px 0;
        }

        .heading-container {
          margin-bottom: 30px;
        }

        .small-title {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 3px;
          color: #667eea;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .large-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          color: #2d3748;
          margin: 0;
          line-height: 1.3;
        }

        .para {
          font-size: 16px;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 40px;
        }

        .app_bar_chart {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .chart {
          margin-bottom: 10px;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .chart p {
          font-size: 16px;
          font-weight: 600;
          color: #2d3748;
          margin: 0;
        }

        .percentage {
          font-size: 14px;
          font-weight: 600;
          color: #667eea;
        }

        .bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .fill1,
        .fill2,
        .fill3 {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          display: block;
          animation: fillAnimation 2s ease-in-out;
        }

        .fill1 {
          width: 95%;
          animation-delay: 0.2s;
        }

        .fill2 {
          width: 88%;
          animation-delay: 0.4s;
        }

        .fill3 {
          width: 92%;
          animation-delay: 0.6s;
        }

        @keyframes fillAnimation {
          from {
            width: 0%;
          }
        }

        .app__grid_clients {
          background: white;
          padding: 80px 0;
        }

        .clients_grid_box {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .specification-card {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .specification-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          border-color: #667eea;
        }

        .spec-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          color: white;
          transition: all 0.3s ease;
        }

        .specification-card:hover .spec-icon {
          transform: scale(1.1);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }

        .spec-tagline {
          font-size: 20px;
          font-weight: 700;
          color: #2d3748;
          margin: 0 0 15px 0;
        }

        .spec-description {
          font-size: 14px;
          line-height: 1.6;
          color: #4a5568;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .app__getClients-content {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 60px;
          }

          .featured_img {
            order: -1;
          }

          .feature-image {
            height: 300px;
          }

          .clients_grid_box {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .specification-card {
            padding: 30px 20px;
          }

          .spec-icon {
            width: 70px;
            height: 70px;
          }

          .app__clients-get {
            padding: 60px 0;
          }

          .app__grid_clients {
            padding: 60px 0;
          }
        }

        @media (max-width: 480px) {
          .large-title {
            font-size: 24px;
          }

          .app_bar_chart {
            gap: 20px;
          }
        }

        /* Loading Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .specification-card {
          animation: fadeInUp 0.6s ease forwards;
        }

        .specification-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .specification-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .specification-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        .specification-card:nth-child(4) {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}

export default ClientsGet;
