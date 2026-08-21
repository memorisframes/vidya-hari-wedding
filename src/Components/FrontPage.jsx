import React from "react";
import "./FrontPage.css";
import waxSeal from "../assets/seal.png";
import flower from "../assets/flower.svg";
function FrontPage() {
  return (
    <div className="front-page">
      <div className="first-half"></div>

      <div className="second-half">
        <img src={flower} alt="" className="flower" />
      </div>

      <img src={waxSeal} alt="Wax seal" className="wax-seal" />
    </div>
  );
}

export default FrontPage;
