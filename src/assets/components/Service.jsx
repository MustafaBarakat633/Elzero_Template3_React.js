import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceDiv = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: var(--main-transition);
  counter-increment: item-counter;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    background-color: var(--main-blue-color);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: var(--main-transition);
  }

  &:hover::before {
    width: 100%;
  }

  & .card-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 50px 20px;
  }

  & svg {
    color: #999;
  }

  & h3 {
    text-transform: capitalize;
    color: var(--main-blue-color);
    // font-size: 25px;
  }

  & .card-bottom {
    background-color: #ececec;
    padding: 10px 20px;
    position: relative;
    z-index: 1;
    text-align: right;
  }

  /* pseudo elements affects (text-transform) property of it's parent */
  & .card-bottom::before {
    content: counter(item-counter);
    position: absolute;
    background-color: var(--main-blue-color);
    color: #fff;
    font-weight: bold;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    padding-right: 30px;
  }

  & .card-bottom::after {
    content: "";
    position: absolute;
    top: 0;
    left: 58px;
    width: 35px;
    height: 100%;
    background-color: #d5d5d5;
    transform: skewX(-25deg);
  }

  & a {
    color: var(--main-blue-color);
    text-decoration: none;
    font-weight: bold;
  }
`;

const Service = ({ icon, title, href }) => {
  return (
    <ServiceDiv>
      <div className="card-top">
        <FontAwesomeIcon icon={icon} size="4x" />
        <h3>{title}</h3>
      </div>
      <div className="card-bottom">
        <a href={href}>Details</a>
      </div>
    </ServiceDiv>
  );
};

export default Service;
