export default function ShayarPage1() {
  return (
    <div className="about-container">
      <div className="video-section">
        <video autoPlay muted loop loading="lazy">
          <source src="Video/aboutbackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
        <div className="video-content">
          <div className="title-text">Shayar</div>
        </div>
      </div>
    </div>
  );
}
