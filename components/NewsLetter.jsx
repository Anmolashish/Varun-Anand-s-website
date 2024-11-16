export default function NewsLetter() {
  return (
    <form className="newsletter">
      <div className="subscribe">
        <h2 className="subscribe__title">Lets keep in touch</h2>
        <p className="subscribe__copy">
          Subscribe to keep up with fresh news and exciting updates. We promise
          not to spam you!
        </p>
        <div className="form">
          <input
            type="email"
            className="form__email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="form__button">
            Send
          </button>
        </div>
        <div className="notice">
          <input type="checkbox" required />
          <span className="notice__copy ">
            I agree to my email address being stored and uses to recieve monthly
            newsletter.
          </span>
        </div>
      </div>
    </form>
  );
}
