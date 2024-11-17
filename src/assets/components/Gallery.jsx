import SectionTitle from "./SectionTitle";
import ImageCard from "./ImageCard";

const images = [
  "/images/gallery-01.png",
  "/images/gallery-02.png",
  "/images/gallery-04.png",
  "/images/gallery-05.jpg",
  "/images/gallery-04.png",
  "/images/gallery-06.png",
];

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="limit-width">
        <SectionTitle title="gallery" />
        <div className="grid-box grid-4-cols">
          {images.map((imageSrc, i) => (
            <ImageCard key={i} src={imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
