import Image from "next/image";
import Link from "next/link";
import mainImage from "@/public/Images/main-image.jpg";

export default function Homepage1() {
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
            src={mainImage}
            alt="Front image"
            width={800}
            height={800}
            placeholder="blur"
          />
        </div>
        <div className="content">
          <h1 className="heading-text">Varun Anand</h1>
          <p className="underline-text">
            Dive into the world of words, rhythm, and soul-stirring poetry!
          </p>

          <div className="button-text">
            <Link className="white" href={"/about"}>
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
