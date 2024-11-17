import SectionTitle from "./SectionTitle";
import PlanItem from "./PlanItem";

const plans = [
  {
    title: "basic",
    imgSrc: "/images/hosting-basic.png",
    price: "15",
    space: "10",
    numOfEmails: "5",
    subdomains: "2",
    DBs: "4",
    support: "basic",
    href: "#",
  },
  {
    title: "advanced",
    imgSrc: "/images/hosting-advanced.png",
    price: "25",
    space: "20",
    numOfEmails: "10",
    subdomains: "5",
    DBs: "8",
    support: "advanced",
    href: "#",
    isMostPopular: true,
  },
  {
    title: "professional",
    imgSrc: "/images/hosting-professional.png",
    price: "45",
    space: "50",
    numOfEmails: "20",
    subdomains: "10",
    DBs: "20",
    support: "professional",
    href: "#",
  },
];

const Plans = () => {
  return (
    <section id="plans" className="bg-image">
      <div className="limit-width">
        <SectionTitle title="pricing plans" />
        <div className="grid-box grid-3-cols">
          {plans.map((e, i) => (
            <PlanItem key={i} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
