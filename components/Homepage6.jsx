import Image from "next/image";

// Static imports for images
import eventImage1 from "@/public/Images/IMG-20241109-WA0009.jpg";
import eventImage2 from "@/public/Images/IMG-20241109-WA0007.jpg";
import eventImage3 from "@/public/Images/IMG-20241109-WA0008.jpg";

export default function Homepage6() {
  const width = 400;
  const height = 400;

  const eventData = [
    {
      id: 1,
      title: "Jashn e rekhta",
      description:
        "Our esteemed shayar was honored with an invitation to Jashn-e-Rekhta, the grand celebration of Urdu literature and culture. Join us in celebrating his journey!",
      date: "2019-12-15",
      link: "https://www.jashnerekhta.org/",
      image: eventImage1,
    },
    {
      id: 2,
      title: "Dubai andaz e bayan",
      description:
        "Invited to the prestigious Dubai Andaz-e-Bayan, a celebrated event honoring exceptional voices in Urdu literature and poetry.",
      date: "2023-11-26",
      link: "https://andaazebayaanaur.com/",
      image: eventImage2,
    },
    {
      id: 3,
      title: "Jashn e urdu dubai",
      description:
        "Invited to Jashn-e-Urdu Dubai, a renowned celebration dedicated to the richness of Urdu language and poetry.",
      date: "2021-11-19",
      link: "https://jashneurdu.org/",
      image: eventImage3,
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
                  src={element.image}
                  id="rev-img"
                  alt="event-image"
                  className="events-header-images"
                  width={width}
                  height={height}
                  placeholder="blur"
                />
              </div>
              <div className="event-info">
                <h3 className="title">{element.title}</h3>
                <hr />
                <p className="event-description">{element.description}</p>
              </div>
              <div className="card-footer">
                <p className="tag">{element.date}</p>
                <a href={element.link}>
                  <button type="button" className="action">
                    More
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
