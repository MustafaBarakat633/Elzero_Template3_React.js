import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Anchor = styled.a`
  --dim: 40px;
  background-color: #313131;
  width: var(--dim);
  height: var(--dim);
  display: flex !important;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: var(--main-transition);
  color: #b9b9b9;

  &:hover {
    background-color: ${({ $color }) => $color};
    color: #fff;
  }
`;

const SocialLink = ({ href, icon, color }) => {
  return (
    <li>
      <Anchor href={href} $color={color}>
        <FontAwesomeIcon icon={icon} />
      </Anchor>
    </li>
  );
};

export default SocialLink;
