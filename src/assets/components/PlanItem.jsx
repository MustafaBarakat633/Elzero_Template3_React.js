import styled from "styled-components";

const PlanItemDiv = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 50%;
    background-color: #f6f6f6;
    z-index: -1;
    transition: var(--main-transition);
  }

  &::before {
    top: 0;
    right: 0;
  }

  &::after {
    bottom: 0;
    left: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
  }

  & .card-head {
    text-align: center;
    padding: 20px;
    position: relative;
  }

  &.most-popular .card-head::before {
    content: "most popular";
    text-transform: capitalize;
    position: absolute;
    background-color: var(--main-blue-color);
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    writing-mode: vertical-rl;
    top: 0;
    right: 20px;
    padding: 20px 8px 50px 10px;
  }

  &.most-popular .card-head::after {
    content: "";
    border-color: transparent transparent #fff transparent;
    border-width: 28px;
    border-style: solid;
    position: absolute;
    top: 131px;
    right: 20px;
    transition: 0.2s;
  }

  &.most-popular:hover .card-head::after {
    border-color: transparent transparent #f6f6f6 transparent;
  }

  @media (min-width: 1200px) {
    &.most-popular {
      top: -30px;
    }
  }

  & h3 {
    text-transform: capitalize;
    margin-bottom: 10px;
    font-size: 25px;
  }

  & img {
    width: 100px;
  }

  & .plan-price {
    color: var(--main-blue-color);
    font-weight: bold;
    font-size: 3rem;
  }

  & .plan-period {
    color: var(--gray-777);
    text-transform: capitalize;
  }

  & .plan-info {
    list-style: none;
  }

  & .plan-info li {
    padding: 20px;
    position: relative;
  }

  & .plan-info li:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  & .plan-info li::before {
    // font-family: "Font Awesome 5 Free";
    content: "✔";
    margin-right: 15px;
    font-weight: 900;
    color: var(--main-blue-color);
    border: 1px solid var(--main-blue-color);
    padding: 1px 10px;
    border-radius: 20px;
  }

  & .plan-btn {
    text-align: center;
  }

  & a {
    color: var(--main-blue-color);
    text-transform: capitalize;
    text-decoration: none;
    font-weight: bold;
    font-style: 2.5rem;
    display: inline-block;
    border: 2px solid var(--main-blue-color);
    padding: 10px 18px;
    border-radius: 5px;
    margin: 10px 0 30px;
    transition: var(--main-transition);
  }

  & a:hover {
    color: #fff;
    background-color: var(--main-blue-color);
  }
`;

const PlanItem = ({
  title,
  imgSrc,
  price,
  space,
  numOfEmails,
  subdomains,
  DBs,
  support,
  href,
  isMostPopular,
}) => {
  return (
    <PlanItemDiv className={`${isMostPopular ? "most-popular" : ""}`}>
      <div className="card-head">
        <h3>{title}</h3>
        <img src={imgSrc} alt="" />
        <div className="plan-price">${price}</div>
        <div className="plan-period">per month</div>
      </div>
      <ul className="plan-info">
        <li>{space}GB HDD Space</li>
        <li>{numOfEmails} Email Addresses</li>
        <li>{subdomains} Subdomains</li>
        <li>{DBs} Databases</li>
        <li>{support} Support</li>
      </ul>
      <div className="plan-btn">
        <a href={href}>choose plan</a>
      </div>
    </PlanItemDiv>
  );
};

export default PlanItem;
