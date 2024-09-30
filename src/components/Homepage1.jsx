export default function Homepage1() {
  return (
    <div className="home-page1">
      <div className="video-background">
        <video autoPlay muted loop loading="lazy">
          <source src="Video/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="overlay-image">
          <img className="overlay-main-image" src="Images/main-image.jpg" />
          {/* <img
            width="1"
            height="110vw"
            style={{ position: "absolute", top: "0", left: "0", zIndex: "2" }}
            src="Images/image.png"
          /> */}
        </div>
        <div className="content">
          <div className="heading-text">Varun Anand</div>
          <div className="underline-text">
            Dive into the world of words, rhythm, and soul-stirring poetry!
          </div>
          <div className="button-text">Explore More</div>
        </div>
      </div>
    </div>
  );
}
