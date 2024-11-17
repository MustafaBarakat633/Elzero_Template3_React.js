import SectionTitle from "./SectionTitle";
import Service from "./Service";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

const servicesArr = [
  {
    icon: faUserShield,
    title: "security",
    href: "#",
  },
  {
    icon: faUserShield,
    title: "security",
    href: "#",
  },
  {
    icon: faUserShield,
    title: "security",
    href: "#",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="limit-width">
        <SectionTitle title="services" />
        <div className="grid-box grid-3-cols">
          {servicesArr.map((e, i) => (
            <Service key={i} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
