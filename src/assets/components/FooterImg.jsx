import styled from "styled-components";

const Li = styled.li`
  width: 70px;

  & img {
    width: 100%;
    display: block;
    border: 4px solid #fff;
  }
`;

const FooterImg = ({ src }) => {
  return (
    <Li>
      <img src={src} alt="" />
    </Li>
  );
};

export default FooterImg;
