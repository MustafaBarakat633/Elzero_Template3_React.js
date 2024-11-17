import SectionTitle from "./SectionTitle";
import { ProgressItem } from "./ProgressItem";

const skills = [
  { skillName: "HTML", progress: "80" },
  { skillName: "CSS", progress: "85" },
  { skillName: "JavaScript", progress: "70" },
  { skillName: "Python", progress: "80" },
];

const OurSkills = () => {
  return (
    <section id="our-skills" className="spikes">
      <div className="limit-width">
        <SectionTitle title="our skills" />
        <div className="flexbox-container">
          <div className="image">
            <img src="images/skills.png" alt="" />
          </div>
          <div className="progress-box">
            {skills.map((e, i) => (
              <ProgressItem key={i} {...e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
