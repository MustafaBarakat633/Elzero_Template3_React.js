import SectionTitle from "./SectionTitle";
import Feature from "./Feature";

const features = [
  {
    imageSrc: "/images/gallery-05.jpg",
    title: "quality",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
    href: "#",
    color: "#009688",
  },
  {
    imageSrc: "/images/gallery-05.jpg",
    title: "time",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
    href: "#",
    color: "#f44036",
  },
  {
    imageSrc: "/images/gallery-05.jpg",
    title: "passion",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
    href: "#",
    color: "#03a9f4",
  },
];

const Features = () => {
  return (
    <section id="features" className="spikes">
      <div className="limit-width">
        <SectionTitle title="features" />
        <div className="grid-box grid-3-cols">
          {features.map((feature, i) => (
            <Feature key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
