import styled from "styled-components";

const H2 = styled.h2`
  text-transform: uppercase;
  border: 2px solid black;
  width: fit-content;
  margin: 0 auto 80px;
  position: relative;
  padding: 0 10px;
  z-index: 3;
  text-align: center;
  --animation-time: 0.5s;
  transition: var(--main-transition);

  &:hover {
    color: #fff;
    transition-delay: var(--animation-time);
  }

  &::before,
  &::after {
    --space-outside: -20px;
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: var(--main-blue-color);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    transition: 0.8s;
  }

  &::before {
    left: var(--space-outside);
  }

  &::after {
    right: var(--space-outside);
  }

  &:hover::before {
    animation: header-animation-left 0.5s linear forwards;
  }

  @keyframes header-animation-left {
    50% {
      left: 0;
      width: 12px;
      height: 12px;
    }
    100% {
      left: 0;
      border-radius: 0;
      width: 60%;
      height: 100%;
    }
  }

  &:hover::after {
    animation: header-animation-right 0.5s linear forwards;
  }

  @keyframes header-animation-right {
    50% {
      right: 0;
      width: 12px;
      height: 12px;
    }
    100% {
      right: 0;
      border-radius: 0;
      width: 60%;
      height: 100%;
    }
  }
`;

const SectionTitle = ({ title }) => {
  return <H2>{title}</H2>;
};

export default SectionTitle;
