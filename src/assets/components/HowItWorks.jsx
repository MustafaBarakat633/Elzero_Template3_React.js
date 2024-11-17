import SectionTitle from "./SectionTitle";
import WorkStep from "./WorkStep";

const workSteps = [
  {
    imageSrc: "/images/work-steps-1.png",
    title: "business analysis",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel",
  },
  {
    imageSrc: "/images/work-steps-2.png",
    title: "architecture",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel",
  },
  {
    imageSrc: "/images/work-steps-3.png",
    title: "developement",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="limit-width">
        <SectionTitle title="how it works" />
        <div className="flexbox-container">
          <div className="image">
            <img src="images/megamenu.png" alt="" />
          </div>
          <div className="work-steps">
            {workSteps.map((e, i) => (
              <WorkStep key={i} {...e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
