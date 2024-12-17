import Link from "next/link";

export default function HomeFooter() {
  return (
    <div className="footer-div">
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Varun Anand</h1>

          <h2>Contact</h2>

          <address>
            Ludhiana, Punjab
            <br />
            <a className="footer__btn" href="varunanand1234@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Shayari</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <Link href="/shayari/latest">Latest</Link>
              </li>

              <li>
                <Link href="/shayari/signature">Signature</Link>
              </li>

              <li>
                <Link href="/shayari/sad">Sad</Link>
              </li>

              <li>
                <Link href="/shayari/romantic">Romantic</Link>
              </li>

              <li>
                <Link href="/shayari/breakup">Break-up</Link>
              </li>

              <li>
                <Link href="/shayari/motivational">Motivational</Link>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Contact</h2>

            <ul className="nav__ul">
              <li>
                <Link href="/booking">Booking</Link>
              </li>

              <li>
                <Link href="/">Contact</Link>
              </li>

              <li>
                <Link href="/">NewsLetter</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2024 AAA. All rights reserved.</p>

          <div className="legal__links">
            <span>All rights are Under AAA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
