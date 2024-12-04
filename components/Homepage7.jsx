"use client";

import { useEffect } from "react";

export default function Homepage7() {
  useEffect(() => {
    const instagramScript = document.createElement("script");
    instagramScript.src = "https://www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    const xScript = document.createElement("script");
    xScript.src = "https://platform.twitter.com/widgets.js";
    xScript.async = true;
    document.body.appendChild(xScript);

    // Load the Facebook SDK
    const fbScript = document.createElement("script");
    fbScript.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0";
    fbScript.async = true;
    fbScript.defer = true;
    document.body.appendChild(fbScript);

    fbScript.onload = () => {
      if (window.FB) {
        window.FB.XFBML.parse(); // Force reparse to initialize Facebook components
      }
    };

    return () => {
      document.body.removeChild(instagramScript);
      document.body.removeChild(xScript);
      document.body.removeChild(fbScript);
    };
  }, []);

  return (
    <div className="home-page7">
      <div id="pat-heading">
        <h1>Social Feed</h1>
      </div>
      <div className="social-container">
        {/* Facebook Feed */}
        <div className="social-feed facebook-feed">
          <h2 className="social-heading">Facebook</h2>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/profile.php?id=100064415902893"
            data-tabs="timeline"
            data-width="500"
            data-height="400"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
            align="center"
            data-dnt="true"
          >
            <blockquote
              cite="https://www.facebook.com/profile.php?id=100064415902893"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/profile.php?id=100064415902893">
                <div className="loader-container">
                  <svg viewBox="25 25 50 50" className="loading">
                    <circle className="loader" r="20" cy="50" cx="50"></circle>
                  </svg>
                </div>
              </a>
            </blockquote>
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="social-feed instagram-feed">
          <h2 className="social-heading">Instagram</h2>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/varunanand2526"
            data-instgrm-version="12"
            align="center"
            data-dnt="true"
          >
            <a
              href="https://www.instagram.com/varunanand2526"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="loader-container">
                <svg viewBox="25 25 50 50" className="loading">
                  <circle className="loader" r="20" cy="50" cx="50"></circle>
                </svg>
              </div>
            </a>
          </blockquote>
        </div>

        {/* X (formerly Twitter) Post */}
        <div className="social-feed x-feed">
          <h2 className="social-heading">X</h2>
          <blockquote className="twitter-tweet" data-dnt="true" align="center">
            <a href="https://twitter.com/VarunAn77588633/status/1530439895067439105?ref_src=twsrc%5Etfw">
              <div className="loader-container">
                <svg viewBox="25 25 50 50" className="loading">
                  <circle className="loader" r="20" cy="50" cx="50"></circle>
                </svg>
              </div>
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
