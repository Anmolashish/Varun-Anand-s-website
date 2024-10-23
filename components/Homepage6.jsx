import Image from "next/image";

export default function Homepage6() {
  const width = "400";
  const height = "400";
  return (
    <div className="home-page6">
      <div id="pat-heading">
        <h1>EVENTS</h1>
      </div>
      <div className="event">
        <div className="card">
          <div className="header">
            <Image
              src="/Images/review.jpeg"
              id="rev-img"
              alt="event-image"
              width={width}
              height={height}
            />
          </div>
          <div className="info">
            <h3 className="title">Shayar Wins Prestigious Poetry Award</h3>
            <p>
              Our beloved shayar has been awarded the prestigious Golden Pen for
              outstanding contributions to poetry. Celebrate with us!{" "}
            </p>
          </div>
          <div className="card-footer">
            <p className="tag">2024-09-20</p>
            <button type="button" className="action">
              Join{" "}
            </button>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <Image
              src="/Images/review.jpeg"
              id="rev-img"
              alt="event-image"
              width={width}
              height={height}
            />
          </div>
          <div className="info">
            <p className="title">Shayar Wins Prestigious Poetry Award</p>
            <p>
              Our beloved shayar has been awarded the prestigious Golden Pen for
              outstanding contributions to poetry. Celebrate with us!{" "}
            </p>
          </div>
          <div className="card-footer">
            <p className="tag">2024-09-20</p>
            <button type="button" className="action">
              Join{" "}
            </button>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <Image
              src="/Images/review.jpeg"
              id="rev-img"
              alt="event-image"
              width={width}
              height={height}
            />
          </div>
          <div className="info">
            <p className="title">Shayar Wins Prestigious Poetry Award</p>
            <p>
              Our beloved shayar has been awarded the prestigious Golden Pen for
              outstanding contributions to poetry. Celebrate with us!{" "}
            </p>
          </div>
          <div className="card-footer">
            <p className="tag">2024-09-20</p>
            <button type="button" className="action">
              Join{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
