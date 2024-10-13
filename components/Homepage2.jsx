import Image from "next/image";

export default function Homepage2() {
  return (
    <div className="home-page2">
      <div id="pat-heading">
        <h1>हमारे साथी कलाकार</h1>
      </div>
      <div id="pattners">
        <div>
          <Image src="/Images/fellow.jpg" id="pat-Image" alt="Shayar Image" />
        </div>
        <div>
          <Image src="/Images/fellow.jpg" id="pat-Image" alt="Shayar Image" />
        </div>
        <div>
          <Image src="/Images/fellow.jpg" id="pat-Image" alt="Shayar Image" />
        </div>
      </div>
      <div className="review-container">
        <div id="pat-heading">
          <h1> समीक्षा</h1>
        </div>
        <div className="review">
          <div className="book">
            <p>Hello</p>
            <div className="cover">
              <Image
                src="Images/review.jpeg"
                id="rev-Image"
                alt="Shayar Image"
              />
            </div>
          </div>
          <div className="book">
            <p>Hello</p>
            <div className="cover">
              <Image
                src="Images/review.jpeg"
                id="rev-Image"
                alt="Shayar Image"
              />
            </div>
          </div>
          <div className="book">
            <p>Hello</p>
            <div className="cover">
              <Image
                src="Images/review.jpeg"
                id="rev-Image"
                alt="Shayar Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
