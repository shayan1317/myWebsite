import React from "react";
import "./ClientsGet.css";
import Heading from "../heading/Heading";
import Specification from "../specification/Specification";
import { useState } from "react";
function ClientsGet() {
  const flag = false;
  return (
    <div className="app__clients-get">
      <div className="app__getClients-content container1">
        <div className="featured_img">
          <img
            src="	https://preview.colorlib.com/theme/mosh/img/bg-img/xfeatures.png.pagespeed.ic.ZdY3tiG0_C.webp"
            alt=""
          />
        </div>

        <div className="info">
          <Heading
            flag={flag}
            small_title="CLIENTS"
            large_title="What you get if you start your business with us"
          />
          <p className="para">
            Etiam nec odio vestibulum est mattis effic iturut magna.
            Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.
            Etiam nec odio vestibulum est mat tis effic iturut magna.
            Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec
            odio vestibulum est mattis effic iturut magna. Pellente sque sita
            met tellus blandit. Etiam nec odio.
          </p>
          <div className="app_bar_chart">
            <div className="chart">
              <p>Development</p>
              <div className="bar">
                <span className="fill1"></span>
              </div>
            </div>
            <div className="chart">
              <p>Design</p>
              <div className="bar">
                <span className="fill2"></span>
              </div>
            </div>
            <div className="chart">
              <p>SEO</p>
              <div className="bar">
                <span className="fill3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__grid_clients">
        <div className="clients_grid_box container1">
          <Specification
            tagline="No 1 in sales"
            img_src="https://preview.colorlib.com/theme/mosh/img/core-img/xtrophy.png.pagespeed.ic._rNUY_NDrr.webp"
          />
          <Specification
            tagline="Documentation Inside"
            img_src="https://preview.colorlib.com/theme/mosh/img/core-img/xedit.png.pagespeed.ic.yhUaGAGrQW.webp"
          />
          <Specification
            tagline="Modern Design"
            img_src="https://preview.colorlib.com/theme/mosh/img/core-img/xvideo-camera.png.pagespeed.ic.PEzYxEwqCr.webp"
          />
          <Specification
            tagline="Marketing Strategist"
            img_src="https://preview.colorlib.com/theme/mosh/img/core-img/xpresentation.png.pagespeed.ic.sdSBEXwEyw.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default ClientsGet;
