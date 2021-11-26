import home2 from "../images/home2.png";

//import Icons
import clock from "../images/icon/clock.svg";
import money from "../images/icon/money.svg";
import teamwork from "../images/icon/teamwork.svg";
import diaphragm from "../images/icon/diaphragm.svg";
//import styled components
import styled from "styled-components";

//import styles
import { LayoutStyle, DescriptionStyle, ImageStyle } from "../styles";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <DescriptionStyle>
        <h2>
          Life Survival <span> Skills</span>
        </h2>
        <CardStyle>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Time Management</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Problem Solving</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Team Spirited</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Service Orientation</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
        </CardStyle>
      </DescriptionStyle>
      <ImageStyle>
        <img src={home2} alt="" />
      </ImageStyle>
    </Services>
  );
};
const Services = styled(LayoutStyle)`
  margin-top: 200px;
  p {
    font-size: 90%;
  }
  h2 {
    padding-bottom: 5rem;
  }
  @media (max-width: 900px) {
    margin-top: 0;
  }
`;
export const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  .card {
    flex-basis: 20rem;
  }
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default ServicesSection;
