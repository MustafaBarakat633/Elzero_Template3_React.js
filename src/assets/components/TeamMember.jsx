import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const TeamMemberDiv = styled.div`
  --box-border-radius: 20px;
  position: relative;
  padding-top: 30px;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f3f3f3;
    width: calc(100% - 50px);
    height: 100%;
    border-radius: var(--box-border-radius);
    z-index: -1;
  }

  &::after {
    background-color: #e4e4e4;
    width: 0;
    transition: var(--main-transition) width;
  }

  &:hover::after {
    width: calc(100% - 50px);
  }

  & .card-top {
    display: flex;
  }

  & .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    max-width: 100%;
    border-radius: var(--box-border-radius);
    transition: var(--main-transition);
  }

  &:hover img {
    filter: grayscale(100%);
  }

  & .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .social-links a {
    padding: 10px 15px;
    color: var(--gray-777);
    text-decoration: none;
    transition: var(--main-transition);
  }

  & .social-links a:hover {
    color: var(--main-blue-color);
    background-color: #ddd;
  }

  & .social-links a:last-child:hover {
    color: red;
  }

  & .text {
    padding-left: 80px;
    margin: 15px 0;
  }

  & .name {
    color: var(--main-blue-color);
    text-transform: capitalize;
    font-weight: bold;
    font-size: 20px;
  }

  & p {
    color: #666;
  }
`;

const TeamMember = ({
  imageSrc,
  name,
  description,
  facebook,
  x,
  linkedIn,
  youtube,
}) => {
  const socialArr = [
    { icon: faFacebook, href: facebook },
    { icon: faXTwitter, href: x },
    { icon: faLinkedin, href: linkedIn },
    { icon: faYoutube, href: youtube },
  ];
  return (
    <TeamMemberDiv>
      <div className="card-top">
        <div className="image">
          <img src={imageSrc} alt="" />
        </div>
        <div className="social-links">
          {socialArr.map((e, i) => (
            <a href={e.href} key={i}>
              <FontAwesomeIcon icon={e.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="text">
        <div className="name">{name}</div>
        <p>{description}</p>
      </div>
    </TeamMemberDiv>
  );
};

export default TeamMember;
