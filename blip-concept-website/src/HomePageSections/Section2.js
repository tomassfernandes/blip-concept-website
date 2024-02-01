export default function Section2() {
  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );

  return (
    <section className="section-2">
      <div className="section-2-grid">
        <div className="section-2-div section-2-left-div">
          <h3 className="section-2-heading">TECHNICAL OPTIONS</h3>
          <p className="section-2-right-p">
            Blip is a whole universe of opportunities in the IT world.
          </p>
          <button className="section-2-btn section-2-left-btn">
            TECHNOLOGY
          </button>
        </div>
        <div className="section-2-div section-2-right-div">
          <h3 className="section-2-heading">GREAT POTENTIAL</h3>
          <p className="section-2-right-p">
            Every expert was once a beginner. Here to help you unleash great
            potential
          </p>
          <button className="section-2-btn section-2-right-btn">
            EARLY TALENT
          </button>
        </div>
      </div>
    </section>
  );
}
