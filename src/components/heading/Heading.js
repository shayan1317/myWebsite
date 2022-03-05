import React from "react";
import "./heading.css";
function Heading({ flag, small_title, large_title }) {
  return (
    <div className="app__heading">
      <h4 className={flag ? "small__title" : "small__title1"}>{small_title}</h4>
      <h1 className={flag ? "large__title" : "large__title1"}>{large_title}</h1>
    </div>
  );
}

export default Heading;
