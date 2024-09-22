import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navbarOptions = document.querySelector(".navbar-options");

    // Add event listener
    const handleClick = () => {
      navbarOptions.classList.toggle("hide");
    };

    hamburger.addEventListener("click", handleClick);

    // Cleanup event listener on component unmount
    return () => {
      hamburger.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array to ensure it runs only once after the component mounts

  return (
    <>
      <div className="navbar">
        <section className="logo">logo here</section>
        <section className="tabs">
          <div>HOME</div>
          <div>ABOUT</div>
          <div>SHAYARI</div>
        </section>
        <section className="contact-button">
          {" "}
          <div className="button">Contact</div>
          <div className="hamburger">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/menu--v1.png"
              alt="menu--v1"
            />
          </div>
        </section>
      </div>
      <div className="navbar-options hide">
        <div className="navbar options">
          <div className="navbar-option">Home</div>
          <div className="navbar-option">About</div>
          <div className="navbar-option">Writtings</div>
          <div className="navbar-option">Contact</div>
        </div>
      </div>
    </>
  );
}
