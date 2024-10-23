export default function ShayarPage3() {
  return (
    <div className="home-page1">
      <div className="video-background">
        <video autoPlay muted loop loading="lazy">
          <source src="Video/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="overlay-image">
          <Image
            className="overlay-main-image"
            src="/Images/main-image.jpg"
            alt="Front image"
            width={1000}
            height={1000}
          />
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
