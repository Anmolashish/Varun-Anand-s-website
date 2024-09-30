export default function Homepage2() {
  return (
    <div className="home-page2">
      <div id="pat-heading">
        <h1>हमारे साथी कलाकार</h1>
      </div>
      <div id="pattners">
        <div>
          <img src="Images/fellow.jpg" id="pat-img" loading="lazy" />
        </div>
        <div>
          <img src="Images/fellow.jpg" id="pat-img" loading="lazy" />
        </div>
        <div>
          <img src="Images/fellow.jpg" id="pat-img" loading="lazy" />
        </div>
      </div>
      <div className="review-container">
        <div id="pat-heading">
          <h1> समीक्षा</h1>
        </div>
        <div className="review">
          <div class="book">
            <p>Hello</p>
            <div class="cover">
              <img src="Images/review.jpeg" id="rev-img" loading="lazy" />
            </div>
          </div>
          <div class="book">
            <p>Hello</p>
            <div class="cover">
              <img src="Images/review.jpeg" id="rev-img" loading="lazy" />
            </div>
          </div>
          <div class="book">
            <p>Hello</p>
            <div class="cover">
              <img src="Images/review.jpeg" id="rev-img" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
