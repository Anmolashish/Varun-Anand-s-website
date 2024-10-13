import React from "react";
export default function AboutPage4() {
  return (
    <div>
      <h1 className="section-heading">
        Watch Varun Anand's Live Shayari Recital
      </h1>
      <div className="recital-section">
        <div className="video-content">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/73-12V-5LWQ?si=YPXxcmZxe5Nl5gyp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="description-container">
            <h2>Live Shayari Recital</h2>
            <p className="des">
              Experience the magic of Varun Anand's words as he brings his
              poetry to life in this live recital. Listen to his heartfelt
              shayari and feel the emotions behind each word. Whether you're a
              long-time fan or new to his work, this performance will leave a
              lasting impression.
            </p>
            <a
              href="https://youtu.be/73-12V-5LWQ?si=cZfHd1ecwRwHXjiE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="watch-video-button">Watch on YouTube</button>
            </a>
          </div>
        </div>

        <div className="background-blur"></div>
      </div>
    </div>
  );
}
