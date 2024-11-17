import styled from "styled-components";

const TimeItemDiv = styled.div`
  --border-value: 1px solid #ccc;
  background-color: #fff;
  text-align: center;
  border: var(--border-value);
  border-radius: 10px;
  width: 88px;
  transition: var(--main-transition);

  &:hover {
    border-color: var(--main-blue-color);
  }

  & .time-num {
    color: var(--main-blue-color);
    font-weight: bold;
    font-size: 40px;
    border-bottom: var(--border-value);
    transition: var(--main-transition);
  }

  &:hover .time-num {
    border-color: var(--main-blue-color);
  }

  & .time-label {
    text-transform: capitalize;
    padding: 5px 15px;
  }
`;

const TimeItem = ({ timeLabel }) => {
  return (
    <TimeItemDiv>
      <div className="time-num">59</div>
      <div className="time-label">{timeLabel}</div>
    </TimeItemDiv>
  );
};

export default TimeItem;
