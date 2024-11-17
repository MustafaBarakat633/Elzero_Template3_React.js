import styled from "styled-components";

const ProgressItemDiv = styled.div`
  margin-bottom: 12px;

  & .prog-label {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  & .prog-bar {
    height: 30px;
    background-color: #eee;
  }

  & .prog-bar span {
    display: block;
    width: ${({ $width }) => $width}%;
    height: 100%;
    background-color: var(--main-blue-color);
    position: relative;
  }

  & .prog-bar span::before {
    content: attr(data-progress);
    position: absolute;
    right: 0;
    transform: translate(50%);
    top: -45px;
    background-color: #ddd;
    padding: 0 8px;
    border-radius: 5px;
  }

  & .prog-bar span::after {
    content: "";
    position: absolute;
    right: 0;
    transform: translate(50%);
    top: -16px;
    border-style: solid;
    border-color: #ddd transparent transparent transparent;
    border-width: 8px;
  }
`;

export const ProgressItem = ({ skillName, progress }) => {
  return (
    <ProgressItemDiv $width={progress}>
      <div className="prog-label">{skillName}</div>
      <div className="prog-bar">
        <span data-progress={`${progress}%`}></span>
      </div>
    </ProgressItemDiv>
  );
};
