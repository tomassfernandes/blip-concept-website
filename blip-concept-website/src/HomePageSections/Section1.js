import { useState } from "react";

export default function Section1() {
  const [btnIsHover, setBtnIsHover] = useState(false);

  function handleBtnActive() {
    setBtnIsHover(true);
  }

  function handleBtnNonActive() {
    setBtnIsHover(false);
  }

  return (
    <section className="section-1">
      <div className="section">
        <div className="section-1-grid">
          <div className="section-1-text-div">
            <h2 className="heading-secondary">
              Blip, the scale of a leader, the mindset of a challenger.
            </h2>
            <p>
              Based in Porto, Blip is a top-of-the-edge Portuguese IT company,
              focused on software engineering solutions for sports betting and
              gaming.
            </p>
            <p>
              As part of the Flutter Entertainment group, we are an essential
              piece of the business, delivering safe and entertaining websites,
              mobile apps, and retail systems for over 10.6 million monthly
              customers around the globe. Founded in 2009, we already are more
              than 600. The best part? We keep growing!
            </p>
            <button
              onMouseEnter={handleBtnActive}
              onMouseLeave={handleBtnNonActive}
              className="section-main-btn"
            >
              MORE ABOUT BLIP
            </button>
          </div>
          <div className="section-1-img-div">
            <div
              className={`section-1-shape-animation-1 ${
                btnIsHover && "section-1-shape-animation-active"
              }`}
            ></div>
            <div
              className={`section-1-shape-animation-2 ${
                btnIsHover && "section-1-shape-animation-active"
              }`}
            ></div>
            <img
              className="section-1-img"
              src="/img/section-1-img.webp"
              alt="Man working on the pc at Blip"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
