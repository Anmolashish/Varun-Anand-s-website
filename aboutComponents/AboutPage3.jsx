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
    <>
      <div className="quote">
        <blockquote>
          <p>
            <strong>If this is coffee,</strong> please bring me some tea;{" "}
            <strong>but if this is tea,</strong> please bring me some coffee.
          </p>
          <cite>Abraham Lincoln</cite>
        </blockquote>
      </div>
    </>
  );
}
