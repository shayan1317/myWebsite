import React from "react";
import Heading from "../heading/Heading";
import { useState } from "react";
import "./clients.css";
function Clients() {
  const flag = true;
  return (
    <div className="app__clients">
      <div className="app__clients-content container1">
        <Heading
          flag={flag}
          small_title="CLIENTS"
          large_title="All our clients love our work"
        />
        <div className="app__clients-logos">
          <img
            src="https://preview.colorlib.com/theme/mosh/img/clients-img/x1.png.pagespeed.ic.cmENJtDgeU.webp"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/mosh/img/clients-img/x2.png.pagespeed.ic.OA3e7frvuG.webp"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/mosh/img/clients-img/x3.png.pagespeed.ic.c3pv7nx_DO.webp"
            alt=""
          />
          <img
            src="https://preview.colorlib.com/theme/mosh/img/clients-img/x4.png.pagespeed.ic.CWGM6E2voR.webp"
            alt=""
          />

          <img
            src="	https://preview.colorlib.com/theme/mosh/img/clients-img/x5.png.pagespeed.ic.eU5CHASqzA.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Clients;
