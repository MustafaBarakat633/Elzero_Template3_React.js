import styled from "styled-components";

const StepWorkDiv = styled.div`
  --border-radius-value: 5px;
  background-color: #f6f5f5;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: var(--border-radius-value);
  position: relative;
  z-index: 1;

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background-color: #ededed;
    border-radius: var(--border-radius-value);
    transition: var(--main-transition);
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & img {
    width: 50px;
  }

  & .step-title {
    text-transform: capitalize;
    font-weight: bold;
  }

  & p {
    color: var(--gray-777);
    font-size: 12px;
  }
`;

const WorkStep = ({ imageSrc, title, description }) => {
  return (
    <StepWorkDiv>
      <img src={imageSrc} alt="" />
      <div>
        <div className="step-title">{title}</div>
        <p>{description}</p>
      </div>
    </StepWorkDiv>
  );
};

export default WorkStep;
