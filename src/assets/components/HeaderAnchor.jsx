import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Anchor = styled.a`
  padding: 18px;
  transition: var(--main-transition);
  position: relative;
  font-size: 18px;
  text-align: center;
  color: #000;
  white-space: nowrap;

  &:hover {
    color: var(--main-blue-color);
    background-color: var(--link-hover-color);
  }

  &::before {
    content: "";
    width: 0;
    height: 2px;
    background-color: var(--main-blue-color);
    position: absolute;
    top: 0;
    left: 0;
    transition: var(--main-transition);
  }

  &:hover::before {
    width: 100%;
  }

  & svg {
    margin-left: 5px;
    font-size: 12px;
  }
`;

const HeaderAnchor = ({ href, text, icon, children }) => {
  return (
    <li>
      <Anchor href={href}>
        {text}
        {icon && <FontAwesomeIcon icon={icon} />}
      </Anchor>
      {children}
    </li>
  );
};

export default HeaderAnchor;
