import SectionTitle from "./SectionTitle";
import Article from "./Article";

const articles = [
  {
    imageSrc: "/images/cat-07.jpg",
    title: "test title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Reprehenderit.",
    href: "#",
  },
  {
    imageSrc: "/images/cat-07.jpg",
    title: "test title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Reprehenderit.",
    href: "#",
  },
  {
    imageSrc: "/images/cat-07.jpg",
    title: "test title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Reprehenderit.",
    href: "#",
  },
  {
    imageSrc: "/images/cat-07.jpg",
    title: "test title",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit Reprehenderit.",
    href: "#",
  },
];

const Articles = () => {
  return (
    <section id="articles">
      <div className="limit-width">
        <SectionTitle title="articles" />
        <div className="grid-box grid-4-cols">
          {articles.map((article, i) => (
            <Article key={i} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
