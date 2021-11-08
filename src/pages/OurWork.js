//import styled components
import styled from "styled-components";
//import link from react router
import { Link } from "react-router-dom";
//import images
import racer from "../images/theracer-small.png";
import athlete from "../images/athlete-small.png";
import goodtimes from "../images/goodtimes-small.png";

//animation
import { motion } from "framer-motion";
import { pageAnime } from "../animation";

const OurWork = () => {
  return (
    <WorkStyle variants={pageAnime} initial="hidden" animate="show" exit="exit">
      <MovieStyle>
        <h2>The racer</h2>
        <div className="line"></div>
        <Link>
          <img src={racer} alt="racer" />
        </Link>
      </MovieStyle>
      <MovieStyle>
        <h2>Goodtimes</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </MovieStyle>
      <MovieStyle>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </MovieStyle>
    </WorkStyle>
  );
};

const WorkStyle = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem;
  h2 {
    padding: 1rem 0;
  }
`;

const MovieStyle = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
