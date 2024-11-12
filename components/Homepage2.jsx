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
          Varun Anand was born in 1985 in Yamunanagar, Haryana. In 1998, he
          moved to Ludhiana, Punjab with his entire family and settled there. He
          started reciting poetry from 2005 and started reading poetry on stage
          from 2017. He participated in Jashn-e-Rekhta in 2019 and Dubai
          Jashn-e-Urdu Mushaira in 2021. In 2023, he also participated in the
          Mushaira of Andaz e Bayan Aur and this journey continues further.
        </div>
      </div>
    </div>
  );
}
