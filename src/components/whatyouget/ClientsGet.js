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
    </div>
  );
}

export default ClientsGet;
