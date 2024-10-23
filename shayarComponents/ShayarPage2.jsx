import Link from "next/link";
export default function ShayarPage2() {
  return (
    <div className="shayari-page">
      <div className="design-head">
        <img src="Images/design.png" alt="DESIGN" className="design-style" />
      </div>
      <h1 className="shayari-heading">Explore Beautiful Shayari Collections</h1>
      <div className="shayari-grid">
        <div className="shayari-cover">
          <Link href="shayarsec/shayarPage/hello">
            <img
              src="Images/mohabbat.jpeg"
              alt="Mohabbat Shayari"
              className="cover-image"
            />
          </Link>
          <h2 className="shayari-title">Mohabbat Shayari</h2>
        </div>
        <div className="shayari-cover">
          <img
            src="Images/sad.jpeg"
            alt="Sad Shayari"
            className="cover-image"
          />
          <h2 className="shayari-title">Sad Shayari</h2>
        </div>
        <div className="shayari-cover">
          <img
            src="Images/cheat.jpeg"
            alt="Cheats Shayari"
            className="cover-image"
          />
          <h2 className="shayari-title">Cheats Shayari</h2>
        </div>
        <div className="shayari-cover">
          <img
            src="Images/ghazal.jpeg"
            alt="Ghazal 1"
            className="cover-image"
          />
          <h2 className="shayari-title">Ghazal 1</h2>
        </div>
        <div className="shayari-cover">
          <img
            src="Images/ghazal.jpeg"
            alt="Ghazal 2"
            className="cover-image"
          />
          <h2 className="shayari-title">Ghazal 2</h2>
        </div>
        <div className="shayari-cover">
          <img
            src="Images/ghazal.jpeg"
            alt="Ghazal 3"
            className="cover-image"
          />
          <h2 className="shayari-title">Ghazal 3</h2>
        </div>
      </div>
    </div>
  );
}
