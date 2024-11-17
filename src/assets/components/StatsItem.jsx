import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatsItemDiv = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 50px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 0;
    background-color: var(--main-blue-color);
    transition: 1s;
  }

  &::before {
    bottom: 0;
    left: 0;
  }

  &::after {
    top: 0;
    right: 0;
  }

  &:hover::before,
  &:hover::after {
    height: 100%;
  }

  & span {
    display: block;
    font-size: 3rem;
    font-weight: bold;
  }

  & div {
    color: var(--main-blue-color);
    font-style: italic;
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

const StatsItem = ({ icon, number, statsFactor }) => {
  return (
    <StatsItemDiv>
      <FontAwesomeIcon icon={icon} size="2x" />
      <span>{number}</span>
      <div>{statsFactor}</div>
    </StatsItemDiv>
  );
};

export default StatsItem;
