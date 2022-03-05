import React from "react";
import Heading from "../heading/Heading";
import "./shout.css";
function Shout() {
  const flag = false;
  return (
    <div className="app__shout">
      <Heading
        flag={flag}
        small_title="GIVE US A SHOUT"
        large_title="Are you Ready to have a Talk?"
      />
      <button className="contact_us">Contact Us</button>
    </div>
  );
}

export default Shout;
