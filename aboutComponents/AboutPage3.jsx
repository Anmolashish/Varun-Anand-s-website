"use client";
import { useEffect, useState } from "react";
export default function AboutPage3() {
  const [currentIcon, setCurrentIcon] = useState("youtube");
  const [bgColor, setBgColor] = useState("#FF0000"); // Initial color for YouTube

  useEffect(() => {
    const icons = [
      { name: "youtube", color: "#FF0000" }, // YouTube color
      { name: "instagram", color: "#C13584" }, // Instagram color
      { name: "facebook", color: "#455f98" }, // Facebook color
      { name: "x", color: "#1DA1F2" }, // X color (formerly Twitter)
      { name: "live", color: "#23A455" }, // Live Shows color
    ];

    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % icons.length; // Loop through icons
      setCurrentIcon(icons[currentIndex].name);
      setBgColor(icons[currentIndex].color); // Update background color
    }, 3000); // Change icon every 3 seconds

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* Heading outside the color-changing div */}
      <div id="pat-heading">
        <h1>Follow Us on Social Media</h1>
      </div>

      {/* Social media icons inside the color-changing div */}
      <div
        className="social-media-container"
        style={{
          backgroundColor: bgColor, // Set the background color dynamically
        }}
      >
        {/* YouTube Icon */}
        {currentIcon === "youtube" && (
          <div className="social-media-icon">
            <a href="https://www.youtube.com/channel/UCEYRu6GM19WeHFSv312cjZw">
              <img
                src="Images/yout.png" // Path to your YouTube icon
                alt="YouTube"
              />
            </a>
            <div className="follower-count">
              <h3>1K Subscribers</h3>
            </div>
          </div>
        )}

        {/* Instagram Icon */}
        {currentIcon === "instagram" && (
          <div className="social-media-icon">
            <a href="https://www.instagram.com/varunanand2526">
              <img
                src="Images/inst.png" // Path to your Instagram icon
                alt="Instagram"
              />
            </a>
            <div className="follower-count">73.9K Followers</div>
          </div>
        )}

        {/* Facebook Icon */}
        {currentIcon === "facebook" && (
          <div className="social-media-icon">
            <a href="https://www.facebook.com/Varun anand">
              <img
                src="Images/face.png" // Path to your Facebook icon
                alt="Facebook"
              />
            </a>
            <div className="follower-count">1.9K Followers</div>
          </div>
        )}

        {/* X Icon */}
        {currentIcon === "x" && (
          <div className="social-media-icon">
            <a href="https://x.com/@VarunAn77588633">
              <img
                src="Images/x.png" // Path to your X icon
                alt="X"
              />
            </a>
            <div className="follower-count">
              <h3>364 Followers</h3>
            </div>
          </div>
        )}

        {/* Live Shows Icon */}
        {currentIcon === "live" && (
          <div className="social-media-icon">
            <img
              src="Images/live.png" // Path to your Live icon
              alt="Live Shows"
            />
            <div className="follower-count">
              <h3>10,000+ Shows</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
