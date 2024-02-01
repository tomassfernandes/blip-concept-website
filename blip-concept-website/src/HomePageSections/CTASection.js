import ImageSlider from "../HomePageItems/ImageSlider";

export default function CTASection() {
  return (
    <section className="cta-section">
      <ImageSlider />
      <div className="section">
        <div className="cta-section-grid">
          <div className="cta-section-text-div">
            <h1 className="heading-primary">The Missing Piece</h1>
            <p>It's not a job. It's a way of being and it all starts here.</p>
            <button className="cta-btn">FIND A JOB - START HERE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
