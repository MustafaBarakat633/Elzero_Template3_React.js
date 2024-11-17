import SectionTitle from "./SectionTitle";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    imageSrc: "/images/placeholder-image.jpg",
    userName: "user",
    jobTitle: "developer",
    rank: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    imageSrc: "/images/placeholder-image.jpg",
    userName: "user",
    jobTitle: "developer",
    rank: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
  {
    imageSrc: "/images/placeholder-image.jpg",
    userName: "user",
    jobTitle: "developer",
    rank: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="limit-width">
        <SectionTitle title="testimonials" />
        <div className="grid-box grid-3-cols">
          {testimonials.map((e, i) => (
            <Testimonial key={i} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
