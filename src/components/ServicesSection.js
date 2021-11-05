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

const ServicesSection = () => {
  return (
    <Services>
      <DescriptionStyle>
        <h2>
          High <span>quality</span> services
        </h2>
        <CardsStyle>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamplayer</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
        </CardsStyle>
      </DescriptionStyle>
      <ImageStyle>
        <img src={home2} alt="" />
      </ImageStyle>
    </Services>
  );
};
const Services = styled(LayoutStyle)`
  p {
    font-size: 90%;
  }
  h2 {
    padding-bottom: 5rem;
  }
`;
const CardsStyle = styled.div`
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
