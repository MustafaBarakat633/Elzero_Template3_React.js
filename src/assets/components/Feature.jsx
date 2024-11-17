import styled from "styled-components";

const FeatureDiv = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .image {
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #fff;
  }

  & .image::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${({ $color }) => $color};
    opacity: 0.5;
  }

  & .image::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 0px 160px 540px;
    border-color: transparent transparent white transparent;
    bottom: 0;
    right: 0;
    transition: var(--main-transition);
  }

  &:hover .image::after {
    border-width: 0px 600px 160px 0px;
  }

  & img {
    width: 100%;
    display: block;
  }

  & .fix-mob {
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 2px;
    top: -1px;
  }

  & h3 {
    text-transform: capitalize;
    font-size: 30px;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    position: relative;
  }

  & h3:before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 3px;
    background-color: ${({ $color }) => $color};
  }

  & p {
    padding: 30px;
    color: #222;
    text-align: center;
  }

  & a {
    display: block;
    width: fit-content;
    margin: 0 auto 30px;
    color: ${({ $color }) => $color};
    text-decoration: none;
    text-transform: capitalize;
    font-weight: bold;
    border: 2px solid ${({ $color }) => $color};
    border-radius: 5px;
    overflow: hidden;
    padding: 3px 20px;
    font-size: 18px;
    transition: var(--main-transition);
    position: relative;
    z-index: 1;
  }

  &:hover a {
    color: #fff;
  }

  & a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${({ $color }) => $color};
    z-index: -1;
    transition: var(--main-transition);
  }

  &:hover a::before {
    width: 100%;
  }
`;

const Feature = ({ imageSrc, title, description, href, color }) => {
  return (
    <FeatureDiv $color={color}>
      <div className="image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="fix-mob"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>more</a>
    </FeatureDiv>
  );
};

export default Feature;
