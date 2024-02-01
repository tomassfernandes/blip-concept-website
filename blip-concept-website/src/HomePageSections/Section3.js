import { useState } from "react";

export default function Section3() {
  const [btnIsHover, setBtnIsHover] = useState(false);

  function handleBtnActive() {
    setBtnIsHover(true);
  }

  function handleBtnNonActive() {
    setBtnIsHover(false);
  }

  return (
    <section className="section-3">
      <div className="section">
        <div className="section-3-grid">
          <div className="section-3-img-div">
            <div
              className={`section-3-shape-animation-1 ${
                btnIsHover && "section-3-shape-animation-active"
              }`}
            ></div>
            <div
              className={`section-3-shape-animation-2 ${
                btnIsHover && "section-3-shape-animation-active"
              }`}
            ></div>
            <img
              className="section-3-img"
              src="/img/section-3-img.webp"
              alt="People smiling at work"
            />
          </div>
          <div className="section-3-text-div">
            <h2 className="heading-secondary">
              Working at Blip — you'll fit here.
            </h2>
            <p>
              Either you are the night owl who loves to work from home or the
              early bird who never misses lunchtime at the office, you’ll fit
              here. Our working culture is more than just some job benefits, it
              empowers you to come as you are and find the perfect balance
              between your life and your working challenges.
            </p>

            <button
              onMouseEnter={handleBtnActive}
              onMouseLeave={handleBtnNonActive}
              className="section-main-btn"
            >
              BLIP'S WORKING CULTURE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
