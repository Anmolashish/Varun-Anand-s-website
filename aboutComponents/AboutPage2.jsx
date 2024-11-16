"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function AboutPage2() {
  useEffect(() => {
    const sections = document.querySelectorAll(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const width = 500;
  const height = 500;

  return (
    <div className="about-page2">
      <div className="about-section about-heading-container">
        {/* <h1 className="about-heading">My Story</h1> */}
        <div className="about-shayar-container">
          <div className="about-shayar-content">
            <div className="about-shayar-left">
              <Image
                src="/Images/IMG-20240925-WA0007.jpg"
                alt="Varun Anand"
                className="about-shayar-image"
                width={width}
                height={height}
              />
            </div>
            <div className="about-shayar-right">
              <h2 className="about-shayar-title">Shayar, Writer, and Poet</h2>
              <p className="about-shayar-text">
                Varun Anand is a soulful poet whose words beautifully weave
                emotions into verses. His shayari touches hearts, reflecting the
                intricate emotions of love, longing, and life. Each of his lines
                carries a depth that resonates with the audience, making him a
                celebrated name in the world of poetry.
              </p>
              <Link href={"/shayari"}>
                <button className="read-more-button">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="about-section about-heading-container">
        <div className="about-shayar-container">
          <div className="about-shayar-content">
            <div className="about-shayar-left tilt-right">
              <Image
                src="/Images/scroll-image4.jpg"
                alt="Varun Anand"
                className="about-shayar-image"
                width={width}
                height={height}
              />
            </div>

            <div className="about-shayar-right tilt-left">
              <h2 className="about-shayar-title">A Poet of Ghazals</h2>
              <p className="about-shayar-text">
                Varun Anands ghazals evoke deep emotions and take listeners on a
                poetic journey. With his unique style, he crafts soulful ghazals
                that blend tradition with modern emotion, leaving a lasting
                impact on the hearts of his audience verses that weave together
                stories, emotions, and vivid imagery.
              </p>
              <Link href={"/shayari"}>
                <button className="read-more-button">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Third section */}
      <div className="about-section about-heading-container">
        <div className="about-shayar-container">
          <div className="about-shayar-content">
            <div className="about-shayar-left">
              <Image
                src="/Images/scroll-image1.jpg"
                alt="Varun Anand"
                className="about-shayar-image"
                width={width}
                height={height}
              />
            </div>
            <div className="about-shayar-right">
              <h2 className="about-shayar-title">Nazam, Poet, and Dreamer</h2>
              <p className="about-shayar-text">
                Varun Anand’s Nazam is a beautiful exploration of themes that
                resonate with the human experience. Unlike traditional forms of
                poetry, Nazam allows for a more free-flowing expression of
                thoughts and emotions. Varun’s Nazam reflects his deep
                sensitivity and understanding of life’s nuances, crafting.
              </p>
              <Link href={"/shayari"}>
                <button className="read-more-button">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
