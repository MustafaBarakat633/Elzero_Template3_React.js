import SectionTitle from "./SectionTitle";
import TimeItem from "./TimeItem";

const timeLabels = [
  { timeLabel: "days" },
  { timeLabel: "hours" },
  { timeLabel: "minutes" },
  { timeLabel: "seconds" },
];

const Events = () => {
  return (
    <section id="events" className="bg-image spikes">
      <div className="limit-width">
        <SectionTitle title="latest events" />
        <div className="flexbox-container">
          <div className="image">
            <img src="images/events.png" alt="" />
          </div>
          <div className="event-info">
            <div className="time-count-down">
              {timeLabels.map((e, i) => (
                <TimeItem key={i} {...e} />
              ))}
            </div>
            <h3>tech masters event 2021</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
        </div>
        <form action="">
          <input type="email" name="email" placeholder="enter your email" />
          <button type="submit">subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Events;
