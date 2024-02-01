import { useState } from "react";
import ImageSlider from "../HomePageItems/ImageSlider";

export default function CTASection() {
  const [ctaBtnHover, setCtaBtnHover] = useState(false);

  function handleCtaBtnHover() {
    setCtaBtnHover(true);
  }

  function handleCtaBtnLeave() {
    setCtaBtnHover(false);
  }

  return (
    <section className="cta-section">
      <ImageSlider />
      <div
        className={`cta-shape-animation-1 ${
          ctaBtnHover && "cta-shape-animation-1-hover"
        }`}
      ></div>
      <div
        className={`cta-shape-animation-2 ${
          ctaBtnHover && "cta-shape-animation-2-hover"
        }`}
      ></div>
      <div className="section">
        <div className="cta-section-grid">
          <div className="cta-section-text-div">
            <h1 className="heading-primary">The Missing Piece</h1>
            <p>It's not a job. It's a way of being and it all starts here.</p>
            <button
              onMouseEnter={handleCtaBtnHover}
              onMouseLeave={handleCtaBtnLeave}
              className="cta-btn"
            >
              FIND A JOB - START HERE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
