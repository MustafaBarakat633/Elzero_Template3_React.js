import SectionTitle from "./SectionTitle";
import PlayListItem from "./PlayListItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

const playList = [
  {
    href: "#",
    title: "how to create sub domain",
    duration: "05:18",
  },
  {
    href: "#",
    title: "how to create sub domain",
    duration: "05:18",
  },
  {
    href: "#",
    title: "how to create sub domain",
    duration: "05:18",
  },
  {
    href: "#",
    title: "how to create sub domain",
    duration: "05:18",
  },
];

const TopVideos = () => {
  return (
    <section id="top-videos">
      <SectionTitle title="top videos" />
      <div className="limit-width">
        <div className="video-list">
          <div>
            top videos
            <a href="#" className="mix-videos">
              <FontAwesomeIcon icon={faRandom} />
            </a>
          </div>
          <ul>
            {playList.map((e, i) => (
              <PlayListItem key={i} {...e} />
            ))}
          </ul>
        </div>
        <div className="video-show">
          <video src="" controls></video>
          <p>Everything About The Virtual Hosts</p>
        </div>
      </div>
    </section>
  );
};

export default TopVideos;
