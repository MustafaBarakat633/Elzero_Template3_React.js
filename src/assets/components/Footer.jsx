import SocialLink from "./SocialLink";
import ImportantLink from "./ImportantLink";
import FooterImg from "./FooterImg";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    href: "#",
    icon: faFacebookF,
    color: "#0866ff",
  },
  {
    href: "#",
    icon: faYoutube,
    color: "red",
  },
  {
    href: "#",
    icon: faLinkedin,
    color: "#0a66c2",
  },
];

const importantlinks = [
  {
    href: "#",
    text: "important link",
  },
  {
    href: "#",
    text: "important link",
  },
  {
    href: "#",
    text: "important link",
  },
];

const images = [
  "/images/gallery-01.png",
  "/images/gallery-02.png",
  "/images/gallery-04.png",
  "/images/gallery-05.jpg",
  "/images/gallery-06.png",
];

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="limit-width grid-box grid-4-cols">
        <div className="grid-item">
          <a href="#" className="logo">
            elzero
          </a>
          <ul className="social-links">
            {socialLinks.map((e, i) => (
              <SocialLink key={i} {...e} />
            ))}
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div className="grid-item">
          <ul className="important-links">
            {importantlinks.map((e, i) => (
              <ImportantLink key={i} {...e} />
            ))}
          </ul>
        </div>
        <div className="grid-item">
          <ul className="info">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Egypt, Giza, Inside The Sphinx, Room Number 220</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} />
              <span> Business Hours: From 10:00 To 18:00</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneVolume} />
              <div className="phone-numbers">
                <span>+20123456789</span>
                <span>+20987654321</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <ul className="images">
            {images.map((e, i) => (
              <FooterImg key={i} src={e} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
