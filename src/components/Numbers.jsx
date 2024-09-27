import { useEffect } from "react";

export default function Numbers() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speed = 100;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.closest(".counter-item").classList.add("active");
              updateCount();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(counter);
    });
  });

  return (
    <div className="numbers">
      <section className="counter-section">
        <div className="container">
          <div className="counter-item">
            <h2 className="counter" data-target="10000"></h2>
            <p>Followers</p>
          </div>
          <div className="counter-item">
            <h2 className="counter" data-target="900"></h2>
            <p>Events Done</p>
          </div>
          <div className="counter-item">
            <h2 className="counter" data-target="900"></h2>
            <p>Successful Bookings</p>
          </div>
        </div>
      </section>
    </div>
  );
}
