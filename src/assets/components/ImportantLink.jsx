import styled from "styled-components";

const Anchor = styled.a`
  position: relative;
  transition: var(--main-transition);
  text-decoration: none;
  text-transform: capitalize;
  color: #b9b9b9;
  display: inline-block;

  &::before {
    // font-family: "Font Awesome 5 Free";
    content: "»";
    font-weight: 900;
    margin-right: 10px;
    color: var(--main-blue-color);
  }

  &:hover {
    color: #fff;
    transform: translateX(10px);
  }
`;

const ImportantLink = ({ href, text }) => {
  return (
    <li>
      <Anchor href={href}>{text}</Anchor>
    </li>
  );
};

export default ImportantLink;
