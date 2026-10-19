import React, { useState } from "react";
import "./FrontPage.css";
import waxSeal from "../assets/seal.png";
import flower from "../assets/flower.svg";
import InnerPage from "./InnerPage";

function FrontPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`front-page ${isOpen ? "open" : ""}`}>
      {/* Content revealed behind the doors */}
      <div className="inner-page">
        <InnerPage />
      </div>

      {/* Left door */}
      <div className="first-half" onTouchStart={() => setIsOpen(true)} />

      {/* Right door */}
      <div className="second-half" onTouchStart={() => setIsOpen(true)}>
        <img src={flower} alt="" className="flower" />
      </div>

      {/* Wax seal */}
      <img
        src={waxSeal}
        alt="Wax seal"
        className="wax-seal"
        onTouchStart={() => setIsOpen(true)}
      />
    </div>
  );
}

export default FrontPage;
