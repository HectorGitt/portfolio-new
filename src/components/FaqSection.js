import styled from "styled-components";

//import styles
import { LayoutStyle } from "../styles";

const FaqSection = () => {
  return (
    <FaqStyle>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            nesciunt sint quaerat, culpa quis consectetur.
          </p>
        </div>
        <div className="line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            nesciunt sint quaerat, culpa quis consectetur.
          </p>
        </div>
        <div className="line"></div>
      </div>
      <div className="question">
        <h4>Opportunities</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            nesciunt sint quaerat, culpa quis consectetur.
          </p>
        </div>
        <div className="line"></div>
      </div>
      <div className="question">
        <h4>Offers and Products</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            nesciunt sint quaerat, culpa quis consectetur.
          </p>
        </div>
        <div className="line"></div>
      </div>
    </FaqStyle>
  );
};

const FaqStyle = styled(LayoutStyle)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .line {
    background: #cccccc;
    height: 0.3rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2rem 0rem;
  }
  .answer {
    padding: 2rem 0rem;
  }
`;

export default FaqSection;
