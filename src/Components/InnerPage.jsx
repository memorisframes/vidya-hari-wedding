import React from "react";
import { useState, useEffect } from "react";
import "./InnerPage.css";

function CountdownTimer() {
  // Countdown target: 6 December 2026, 11:00 AM IST (Indian Standard Time)
  const weddingDate = new Date("2026-12-06T11:00:00+05:30").getTime();
  const calculateTimeLeft = () => {
    const difference = weddingDate - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="countdown">
      <div className="countdown-timer">
        {units.map((unit) => (
          <div className="countdown-item" key={unit.label}>
            <span className="countdown-number">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="countdown-label">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InnerPage() {
  return (
    <div className="inner-page">
      {/* First section: Your completed design */}
      <section className="invitation-section first-section">
        <div className="wedding-title">
          <div className="fx-mirror">WE ARE GETTING MARRIED</div>
        </div>

        <div className="name-background" />

        <div className="couple-names">
          <h1>
            Hari <br />
            Kumar
          </h1>
        </div>

        <span className="ampersand">&</span>

        <div className="couple-names2">
          <h1>
            Vidya <br /> Viswanadh
          </h1>
        </div>
        <div className="date">
          <h1>06 December 2026</h1>
        </div>
      </section>

      {/* Second section: Wedding details */}
      <section className="invitation-section details-section">
        <CountdownTimer />
        {/* Decorative divider */}
        <div className="wedding-divider">
          <span className="divider-line"></span>
          <span className="divider-ornament">✧</span>
          <span className="divider-line"></span>
        </div>
        <div className="location-details">
          <h2>Venue</h2>
          <p>
            The Grand Palace, <br />
            123 Celebration Avenue, <br />
            Cityville, State, Country
          </p>
        </div>
      </section>

      {/* Third section: Family message or venue */}
      <section className="invitation-section closing-section">
        <h2>We Look Forward to Celebrating With You</h2>
        <p>Your presence will make our day even more special.</p>
      </section>
    </div>
  );
}

export default InnerPage;
