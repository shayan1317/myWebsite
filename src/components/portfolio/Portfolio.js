import React from "react";
import Heading from "../heading/Heading";
import "./portfolio.css";
function Portfolio() {
  const flag = true;
  return (
    <div className="app__portfolio">
      <Heading
        flag={flag}
        small_title="Our Work"
        large_title="See our Online Portfolio"
      />

      <ul className="list">
        <li>All</li>
        <li>Graphic Design</li>
        <li>Brand Identity</li>
        <li>Photography</li>
        <li>Web Design</li>
        <li>Printing</li>
      </ul>
      <div className="grid_images">
        <div className="image">
            
          <img
            src="	https://preview.colorlib.com/theme/mosh/img/portfolio-img/x2.jpg.pagespeed.ic.1Z7osuQ3AN.webp"
            alt=""
          />
        </div>
        <div className="image">
          {" "}
          <img
            src="	https://preview.colorlib.com/theme/mosh/img/portfolio-img/x8.jpg.pagespeed.ic.2qPK7R2OOa.webp"
            alt=""
          />
        </div>

        <div className="image">
          {" "}
          <img
            src="https://preview.colorlib.com/theme/mosh/img/portfolio-img/x3.jpg.pagespeed.ic.yDCig_Au5c.webp"
            alt=""
          />
        </div>

        <div className="image">
          <img
            src="	https://preview.colorlib.com/theme/mosh/img/portfolio-img/x5.jpg.pagespeed.ic.WSdkOSpLrr.webp"
            alt=""
          />
        </div>

        <div className="image">
          {" "}
          <img
            src="https://preview.colorlib.com/theme/mosh/img/portfolio-img/x6.jpg.pagespeed.ic.DUsQ7ecbQo.webp"
            alt=""
          />
        </div>

        <div className="image">
          <img
            src="	https://preview.colorlib.com/theme/mosh/img/portfolio-img/x1.jpg.pagespeed.ic.EpTTj6oob1.webp"
            alt=""
          />
        </div>

        <div className="image">
          {" "}
          <img
            src="	https://preview.colorlib.com/theme/mosh/img/portfolio-img/x4.jpg.pagespeed.ic.5q3ghid2-N.webp"
            alt=""
          />
        </div>

        <div className="image"> 
          {" "}
          <img
            src="	https://preview.colorlib.com/theme/mosh/img/portfolio-img/x7.jpg.pagespeed.ic.hUa0T3zobm.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
