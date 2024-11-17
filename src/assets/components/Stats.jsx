import SectionTitle2 from "./SectionTitle2";
import StatsItem from "./StatsItem";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCode, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";

const statsItems = [
  {
    icon: faUser,
    number: 150,
    statsFactor: "clients",
  },
  {
    icon: faCode,
    number: 135,
    statsFactor: "projects",
  },
  {
    icon: faGlobeAfrica,
    number: 50,
    statsFactor: "countries",
  },
  {
    icon: faMoneyBillAlt,
    number: 500,
    statsFactor: "money",
  },
];
const Stats = () => {
  return (
    <section id="stats">
      <div className="limit-width">
        <SectionTitle2 title="our awesome stats" />
        <div className="grid-box grid-4-cols">
          {statsItems.map((e, i) => (
            <StatsItem key={i} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
