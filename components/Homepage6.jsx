import Image from "next/image";

export default function Homepage6() {
  const width = "400";
  const height = "400";

  const eventData = [
    {
      id: 1,
      title: "REKHTA",
      description:
        "Our beloved shayar has been awarded the prestigious Golden Pen for outstanding contributions to poetry. Celebrate with us!",
      date: "2023-03-01",
      link: "",
    },
    {
      id: 2,
      title: "REKHTA",
      description:
        "Our beloved shayar has been awarded the prestigious Golden Pen for outstanding contributions to poetry. Celebrate with us!",
      date: "2023-03-01",
      link: "",
    },
    {
      id: 3,
      title: "REKHTA",
      description:
        "Our beloved shayar has been awarded the prestigious Golden Pen for outstanding contributions to poetry. Celebrate with us!",
      date: "2023-03-01",
      link: "",
    },
  ];

  return (
    <div className="home-page6">
      <div id="pat-heading">
        <h1>EVENTS</h1>
      </div>
      <div className="event">
        {eventData.map((element) => {
          return (
            <div className="card" key={element.id}>
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
                <h3 className="title">{element.title}</h3>
                <hr />
                <p className="event-description">{element.description} </p>
              </div>
              <div className="card-footer">
                <p className="tag">{element.date}</p>
                <button type="button" className="action">
                  Join{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}