import Image from "next/image";
import Link from "next/link";

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
              src="/Images/scroll-image1.jpg"
              alt="image"
              width={width}
              height={height}
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src="/Images/scroll-image2.jpg"
              alt="image"
              width={width}
              height={height}
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src="/Images/scroll-image3.jpg"
              alt="image"
              width={width}
              height={height}
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src="/Images/scroll-image4.jpg"
              alt="image"
              width={width}
              height={height}
            />
          </div>
        </div>
        <div className="images2">
          <div className="image-div">
            <Image
              className="image"
              src="/Images/scroll-image5.jpg"
              alt="image"
              width={width}
              height={height}
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src="/Images/scroll-image6.jpg"
              alt="image"
              width={width}
              height={height}
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src="/Images/scroll-image7.jpg"
              alt="image"
              width={width}
              height={height}
            />
          </div>
          <div className="image-div">
            <Image
              className="image"
              src="/Images/scroll-image8.jpg"
              alt="image"
              width={width}
              height={height}
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
