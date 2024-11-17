import HeaderAnchor from "./HeaderAnchor";
import NavAnchor from "./NavAnchor";
import {
  faComments,
  faUser,
  faBuilding,
  faCheckCircle,
  faClipboard,
  faCalendarDays,
  faPlayCircle,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faServer,
  faPercentage,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const headerLinks = [
  { href: "#articles", text: "articles" },
  { href: "#gallery", text: "gallery" },
  { href: "#features", text: "features" },
];

const navAnchorsArr1 = [
  { href: "#testimonials", icon: faComments, text: "testimonials" },
  { href: "#team-members", icon: faUser, text: "team members" },
  { href: "#services", icon: faBuilding, text: "services" },
  { href: "#our-skills", icon: faCheckCircle, text: "our skills" },
  { href: "#how-it-works", icon: faClipboard, text: "how it works" },
];
const navAnchorsArr2 = [
  { href: "#events", icon: faCalendarDays, text: "events" },
  { href: "#plans", icon: faServer, text: "pricing plans" },
  { href: "#top-videos", icon: faPlayCircle, text: "top videos" },
  { href: "#stats", icon: faChartBar, text: "stats" },
  { href: "#discount", icon: faPercentage, text: "request a discount" },
];

const Header = () => {
  return (
    <header>
      <div className="limit-width">
        <a href="#" className="logo">
          elzero
        </a>
        <nav>
          <ul id="nav-ul">
            {headerLinks.map((e, i) => (
              <HeaderAnchor key={i} {...e} />
            ))}
            <HeaderAnchor href="#" text="other links" icon={faChevronDown}>
              <div className="other-links">
                <div className="image">
                  <img src="/images/megamenu.png" alt="" />
                </div>
                <ul>
                  {navAnchorsArr1.map((anhorProps) => (
                    <NavAnchor key={anhorProps.href} {...anhorProps} />
                  ))}
                </ul>
                <ul>
                  {navAnchorsArr2.map((anhorProps) => (
                    <NavAnchor key={anhorProps.href} {...anhorProps} />
                  ))}
                </ul>
              </div>
            </HeaderAnchor>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
