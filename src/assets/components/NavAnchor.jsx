import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LI = styled.li`
  & a {
    width: 100%;
    padding: 15px;
    color: var(--main-blue-color);
    font-size: 18px;
    font-weight: bold;
    position: relative;
  }

  &:not(:last-child) a {
    border-bottom: 1px solid #e9e6e6;
  }

  @media (max-width: 767px) {
    &:last-child a {
      border-bottom: 1px solid #e9e6e6;
    }
  }

  & a::before {
    content: "";
    width: 0;
    height: 100%;
    background-color: var(--link-hover-color);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transition: var(--main-transition);
  }

  & a:hover::before {
    width: 100%;
  }

  & a svg {
    margin-right: 15px;
  }
`;

const NavAnchor = ({ href, icon, text }) => {
  return (
    <LI>
      <a href={href}>
        <FontAwesomeIcon icon={icon} />
        {text}
      </a>
    </LI>
  );
};

export default NavAnchor;
