import styled from "styled-components";

const H2 = styled.h2`
  text-align: center;
  text-transform: capitalize;
  font-size: 30px;
  margin-bottom: 80px;
`;

const SectionTitle2 = ({ title }) => {
  return <H2>{title}</H2>;
};

export default SectionTitle2;
