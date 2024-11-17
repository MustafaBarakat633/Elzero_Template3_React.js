import styled from "styled-components";

const ImageCardDiv = styled.div`
  background-color: #fff;
  padding: 10px;

  & div {
    overflow: hidden;
    height: 100%;
    position: relative;
  }

  & div::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 6;
  }

  &:hover div::before {
    animation: hoverEffect 1s;
  }

  @keyframes hoverEffect {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    99% {
      width: 200%;
      height: 200%;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }

  & img {
    width: 100%;
    // height: 100%;
    display: block;
    transition: var(--main-transition);
  }

  &:hover img {
    transform: scale(1.1) rotate(5deg);
  }
`;

const ImageCard = ({ src }) => {
  return (
    <ImageCardDiv>
      <div>
        <img src={src} alt="" />
      </div>
    </ImageCardDiv>
  );
};

export default ImageCard;
