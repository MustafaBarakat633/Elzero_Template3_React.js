import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const TestimonialDiv = styled.div`
  background-color: #fff;
  position: relative;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 20%);

  & img {
    --image-width: 50px;
    width: var(--image-width);
    border-radius: 50%;
    position: absolute;
    top: calc(-1 / 2 * var(--image-width));
    right: 0;
    border: 5px solid var(--section-background);
  }

  & .user-name {
    text-transform: capitalize;
    font-size: 18px;
    font-weight: bold;
  }

  & .job-title {
    text-transform: capitalize;
    color: var(--gray-777);
  }

  & .stars {
    color: gold;
  }

  & p {
    margin-top: 10px;
    color: #555;
  }
`;

const Testimonial = ({ imageSrc, userName, jobTitle, rank, description }) => {
  return (
    <TestimonialDiv>
      <img src={imageSrc} alt="" />
      <div className="user-name">{userName}</div>
      <div className="job-title">{jobTitle}</div>
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={rank-- > 0 ? solidStar : faStar} />
        ))}
      </div>
      <p>{description}</p>
    </TestimonialDiv>
  );
};

export default Testimonial;
