import React from "react";
import Heading from "../heading/Heading";
import "./workflow.css";
import Specification from "../specification/Specification";
function WorkFlow() {
  const flag = true;
  return (
    <div className="app__workflow">
      <div className="app__workflow-content container1">
        <Heading
          flag={flag}
          small_title="OUR WORK FLOW"
          large_title="This is how we work on Projects"
        />
        <div className="app__workflow-grid">
          <Specification
            flag={flag}
            number="01"
            tagline="This is the first step"
          />
          <Specification
            flag={flag}
            number="02"
            tagline="This is the second step"
          />
          <Specification
            flag={flag}
            number="03"
            tagline="This is the third step"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
