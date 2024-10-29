import Image from "next/image";

export default function Homepage2() {
  return (
    <div className="home-page2">
      <div className="image-about-section">
        <Image
          src="/Images/IMG-20240925-WA0003.jpg"
          alt="Varun Anand Stage Image"
          width={1000}
          height={500}
          className="about-section-image"
        />
      </div>
      <div className="text-about-section">
        <div className="about-heading">About</div>
        <div className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer posu erat a ante venenatis dapibus posuere velit aliquet. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </div>
      </div>
    </div>
  );
}
