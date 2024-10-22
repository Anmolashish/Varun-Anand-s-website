export default function AboutPage1(props) {
  return (
    <div className="about-container">
      <div className="video-section">
        <video autoPlay muted loop loading="lazy">
          <source src="Video/aboutbackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay blur"></div>
        <div className="page-heading-section">
          <div className="page-heading">{props.heading}</div>
        </div>
      </div>
    </div>
  );
}
