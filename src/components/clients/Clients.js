import React from "react";
import { useState } from "react";
import "./clients.css";
// Mock Heading component since it's not available
const Heading = ({ flag, small_title, large_title }) => (
  <div className="heading-container">
    <p className="small-title">{small_title}</p>
    <h2 className="large-title">{large_title}</h2>
  </div>
);

function Clients() {
  const flag = true;

  // Client logos with reliable CDN sources
  const clientLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      alt: "Google",
      name: "Google",
    },
    {
      src: "https://www.figma.com/community/resource/5a23b1c0-33ce-4188-a6f8-1005b4470490/thumbnail",
      alt: "Microsoft",
      name: "Microsoft",
    },
    {
      src: "https://images.seeklogo.com/logo-png/15/2/apple-logo-png_seeklogo-158010.png",
      alt: "Apple",
      name: "Apple",
    },
    {
      src: "https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png",
      alt: "Amazon",
      name: "Amazon",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
      alt: "Meta",
      name: "Meta",
    },
    {
      src: "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
      alt: "Netflix",
      name: "Netflix",
    },
  ];

  return (
    <div className="app__clients">
      <div className="app__clients-content">
        <Heading
          flag={flag}
          small_title="CLIENTS"
          large_title="All our clients love our work"
        />

        {/* Client logos grid */}
        <div className="app__clients-logos">
          {clientLogos.map((client, index) => (
            <div key={index} className="client-logo-wrapper">
              <img
                src={client.src}
                alt={client.alt}
                className="client-logo"
                loading="lazy"
              />
              <span className="client-name">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-number">500+</span>
            <span className="trust-label">Happy Clients</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">98%</span>
            <span className="trust-label">Satisfaction Rate</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">5★</span>
            <span className="trust-label">Average Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Clients;
