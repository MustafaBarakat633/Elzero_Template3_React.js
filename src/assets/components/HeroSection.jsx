import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="limit-width">
        <div className="text">
          <h1>Welcome, To Elzero World</h1>
          <p>
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>
        </div>
        <div className="image">
          <img src="images/megamenu.png" alt="" />
        </div>
        <a href="#articles">
          <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
