import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const ArticleDiv = styled.div`
  --border-radius-value: 8px;
  background-color: #fff;
  border-radius: var(--border-radius-value);
  box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
  transition: var(--main-transition);
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 15px rgb(0 0 0 / 20%);
  }

  & img {
    width: 100%;
  }

  & .text {
    padding: 20px;
    border-bottom: 1px solid #eee;
  }

  & h3 {
    text-transform: capitalize;
  }
  & p {
    color: var(--gray-text-color);
  }

  & .read-more {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--main-blue-color);
  }

  & a {
    color: var(--main-blue-color);
    text-transform: capitalize;
    text-decoration: none;
    font-weight: bold;
  }

  &:hover svg {
    animation: movingRight var(--main-transition) infinite alternate;
  }

  @keyframes movingRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(5px);
    }
  }
`;

const Article = ({ imageSrc, title, description, href }) => {
  return (
    <ArticleDiv>
      <img src={imageSrc} alt="" />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="read-more">
        <a href={href}>read more</a>
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </div>
    </ArticleDiv>
  );
};

export default Article;
