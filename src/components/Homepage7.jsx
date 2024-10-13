import { useEffect } from "react";

export default function Homepage7() {
  useEffect(() => {
    const instagramScript = document.createElement("script");
    instagramScript.src = "https://www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    const twitterScript = document.createElement("script");
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    document.body.appendChild(twitterScript);

    return () => {
      document.body.removeChild(instagramScript);
      document.body.removeChild(twitterScript);
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
          <iframe
            frameBorder="0"
            width="100%"
            height="400"
            src="https://www.facebook.com/v9.0/plugins/page.php?adapt_container_width=true&app_id=113869198637480&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df310a21b6f5a654%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff3cf179cd85d47c%26relation%3Dparent.parent&container_width=600&height=400&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2F/profile.php?id=100064415902893&locale=en_US&show_facepile=true&small_header=true&tabs=timeline&width=500"
            allow="encrypted-media"
          />
        </div>

        {/* Instagram Feed */}
        <div className="social-feed instagram-feed">
          <h2 className="social-heading">Instagram</h2>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/varunanand2526"
            data-instgrm-version="12"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: "0",
              width: "99.375%",
              maxHeight: "100%",
            }}
          >
            <a
              href="https://www.instagram.com/varunanand2526"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this post on Instagram
            </a>
          </blockquote>
        </div>

        {/* Twitter Feed */}
        <div className="social-feed twitter-feed">
          <h2 className="social-heading">Twitter</h2>
          <a
            className="twitter-timeline"
            href="https://x.com/VarunAn77588633"
            data-tweet-limit="5"
            data-theme="light"
            data-chrome="noheader nofooter noborders"
          >
            Loading tweets...
          </a>
        </div>
      </div>
    </div>
  );
}
