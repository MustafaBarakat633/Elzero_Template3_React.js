import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  transition: var(--main-transition);

  &:hover {
    background-color: #fafafa;
  }

  & a {
    text-decoration: none;
  }

  & div {
    color: #000;
    text-transform: capitalize;
    font-size: 18px;
    transition: var(--main-transition);
  }

  &:hover div {
    color: var(--main-blue-color);
  }

  & span {
    color: var(--gray-777);
  }
`;

const PlayListItem = ({ href, title, duration }) => {
  return (
    <Li>
      <a href={href}>
        <div>{title}</div>
        <span>{duration}</span>
      </a>
    </Li>
  );
};

export default PlayListItem;
