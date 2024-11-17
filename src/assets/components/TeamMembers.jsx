import SectionTitle from "./SectionTitle";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    imageSrc: "/images/gallery-01.png",
    name: "name",
    description: "simple description",
    facebook: "#11",
    x: "#",
    linkedIn: "#",
    youtube: "#",
  },
  {
    imageSrc: "/images/gallery-02.png",
    name: "name",
    description: "simple description",
    facebook: "#",
    x: "#",
    linkedIn: "#",
    youtube: "#",
  },
  {
    imageSrc: "/images/gallery-04.png",
    name: "name",
    description: "simple description",
    facebook: "#",
    x: "#",
    linkedIn: "#",
    youtube: "#",
  },
];

const TeamMembers = () => {
  return (
    <section id="team-members" className="spikes">
      <div className="limit-width">
        <SectionTitle title="team members" />
        <div className="grid-box grid-3-cols">
          {teamMembers.map((e, i) => (
            <TeamMember key={i} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
