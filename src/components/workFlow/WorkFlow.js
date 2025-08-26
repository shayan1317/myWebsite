import React from "react";
import Heading from "../heading/Heading";
import "./workflow.css";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function WorkFlow() {
  const flag = true;

  const steps = [
    {
      number: "01",
      title: "Research & Planning",
      tagline: "Understanding client needs and crafting the perfect strategy.",
      icon: <LightbulbIcon fontSize="large" />,
    },
    {
      number: "02",
      title: "Design & Development",
      tagline: "Turning ideas into visually appealing, functional designs.",
      icon: <CodeIcon fontSize="large" />,
    },
    {
      number: "03",
      title: "Launch & Growth",
      tagline: "Deploying projects and scaling for long-term success.",
      icon: <RocketLaunchIcon fontSize="large" />,
    },
  ];

  return (
    <div className="app__workflow">
      <div className="app__workflow-content container1">
        <Heading
          flag={flag}
          small_title="OUR WORK FLOW"
          large_title="This is how we work on Projects"
        />

        <div className="app__workflow-grid">
          {steps.map((step, index) => (
            <div key={index} className="workflow-card">
              <div className="workflow-icon">{step.icon}</div>
              <div className="workflow-number">{step.number}</div>
              <h3 className="workflow-title">{step.title}</h3>
              <p className="workflow-tagline">{step.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
