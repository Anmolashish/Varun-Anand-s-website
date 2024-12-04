import Image from "next/image";
import Link from "next/link";

// Importing images statically
import scrollImage1 from "@/public/Images/scroll-image1.jpg";
import scrollImage2 from "@/public/Images/scroll-image2.jpg";
import scrollImage3 from "@/public/Images/scroll-image3.jpg";
import scrollImage4 from "@/public/Images/scroll-image4.jpg";
import scrollImage5 from "@/public/Images/scroll-image5.jpg";
import scrollImage6 from "@/public/Images/scroll-image6.jpg";
import scrollImage7 from "@/public/Images/scroll-image7.jpg";
import scrollImage8 from "@/public/Images/scroll-image8.jpg";

export default function Homepage4() {
  const width = 500;
  const height = 500;

  return (
    <div className="home-page4">
      <div className="images">
        <div className="images1">
          <div className="image-div">
            <Image
              className="image"
              src={scrollImage1}
              alt="Image 1"
              width={width}
              height={height}
              placeholder="blur"
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src={scrollImage2}
              alt="Image 2"
              width={width}
              height={height}
              placeholder="blur"
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src={scrollImage3}
              alt="Image 3"
              width={width}
              height={height}
              placeholder="blur"
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src={scrollImage4}
              alt="Image 4"
              width={width}
              height={height}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="images2">
          <div className="image-div">
            <Image
              className="image"
              src={scrollImage5}
              alt="Image 5"
              width={width}
              height={height}
              placeholder="blur"
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src={scrollImage6}
              alt="Image 6"
              width={width}
              height={height}
              placeholder="blur"
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src={scrollImage7}
              alt="Image 7"
              width={width}
              height={height}
              placeholder="blur"
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src={scrollImage8}
              alt="Image 8"
              width={width}
              height={height}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <Link className="nav-tabs" href={"/gallery"}>
        <div className="see-more">
          <button className="btn">
            See more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="15px"
              width="15px"
              className="icon"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                stroke="#292D32"
                d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
              ></path>
            </svg>
          </button>
        </div>
      </Link>
    </div>
  );
}
