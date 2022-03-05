import React from "react";
import "./header.css";
import { useState } from "react";
import Specification from "../specification/Specification";

function Header() {
  // const [moveRight, SetMoveRight] = useState(false);
  // const [lastNumber, setLastNumber] = useState("3");
  // function moveRight() {
  //   setLastNumber(lastNumber - 1);
  //   SetMoveRight(true);
  // }
  const flag = true;
  return (
    <div className="app__header">
      <div className="app__header-content container1">
        <h1 className="app__header-content-title">
          A clean and modern template
        </h1>
        <p className="app__header-content-subtitle">
          get your free template now
        </p>
        <div className="hero_image">
          <img
            src="https://preview.colorlib.com/theme/mosh/img/bg-img/xdevice.png.pagespeed.ic.i7QufXzdIw.webp"
            alt=""
          />
        </div>
      </div>
      <div className="app__grid ">
        <div className="app__specs container1">
          <Specification tagline="No in Sales" flag={flag} number="01" />
          <Specification tagline="Online Marketing" flag={flag} number="02" />
          <Specification tagline="Modern Design" flag={flag} number="03" />
        </div>

        <div className="app__btn">
          <button className="discover_more">Discover more</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
