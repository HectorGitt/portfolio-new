//import styled components
import styled from "styled-components";
//import images
import streamlab from "../images/projects/streamlab.png";
import portfolio from "../images/projects/port.png";
import softplayer from "../images/projects/softplayer.png";
import dropmint from "../images/projects/dropmint.png";
import outlook from "../images/projects/outlook.png"
import dashboard from "../images/projects/dashboard.png"
import cardanogpt from "../images/projects/cardanogpt.png"
import datcaptures from "../images/projects/datcaptures.png"


//animation
import { motion } from "framer-motion";
import { pageAnime, fade, photoAnim, lineAnim, slider } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  const [element6, controls6] = useScroll();
  const [element7, controls7] = useScroll();
  return (
    <WorkStyle variants={pageAnime} initial="hidden" animate="show" exit="exit">
      <ScrollTop />
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <MovieStyle>
        <motion.h2 variants={fade}>Stream Lab</motion.h2>
        <motion.p variants={fade}>
          A Movie web app created with React, SCSS,React-Context , Firebase , axios and TMDB Api 
        </motion.p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
          <motion.img variants={photoAnim} src={streamlab} alt="streamlab" />
        </Hide>
        <Buttons>
          <a
            target="__blank"
            href="https://github.com/HectorGitt/stream-lab"
          >
            Check Code
          </a>
          <a target="__blank" href="https://movieapphh.netlify.app/">
            Preview Live
          </a>
        </Buttons>
      </MovieStyle>
      <MovieStyle
        ref={element7}
        variants={fade}
        animate={controls7}
        initial="hidden"
      >
        <h2>DAT Captures</h2>
        <motion.p variants={fade}>
          A Photography web app created with React and Styled Components.
        </motion.p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <img src={datcaptures} alt="DatCaptures" />
        <Buttons>
          <a
            target="__blank"
            href="https://github.com/HectorGitt/DATCaptures"
          >
            Check Code
          </a>
          <a target="__blank" href="https://datcaptures.netlify.app/">
            Preview Live
          </a>
        </Buttons>
      </MovieStyle>
      <MovieStyle
        ref={element1}
        variants={fade}
        animate={controls1}
        initial="hidden"
      >
        <h2>CardanoGPT</h2>
        <motion.p variants={fade}>
          
          A React-based page, leveraging Styled Components, to enhance user engagement and drive traffic for a Web3 Solution.
        </motion.p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <img src={cardanogpt} alt="cardanogpt homepage" />
        <Buttons>
          <a
            target="__blank"
            href="https://github.com/HectorGitt/CardanoGPT"
          >
            Check Code
          </a>
          <a target="__blank" href="https://cardanogpt.ai/">
            Preview Live
          </a>
        </Buttons>
      </MovieStyle>

      <MovieStyle
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Outlook Phishing Test</h2>
        <motion.p variants={fade}>
          An outlook email phishing test created with ReactJs and Bootstrap
        </motion.p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <img src={outlook} alt="hand holding a hook with text " />
        <Buttons>
          <a
            target="__blank"
            href="https://github.com/HectorGitt/outlook-phishing-test"
          >
            Check Code
          </a>
          <a target="__blank" href="https://sparkling-chimera-cdfaa7.netlify.app/">
            Preview Live
          </a>
        </Buttons>
      </MovieStyle>

      <MovieStyle
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>Soft Player</h2>
        <motion.p variants={fade}>
          A Music player app created with React and SCSS
        </motion.p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <img src={softplayer} alt="softplayer" />
        <Buttons>
          <a
            target="__blank"
            href="https://github.com/HectorGitt/portfolio-new"
          >
            Check Code
          </a>
          <a target="__blank" href="https://musiccca.netlify.app/">
            Preview Live
          </a>
        </Buttons>
      </MovieStyle>

      
      
      <MovieStyle
        ref={element4}
        variants={fade}
        animate={controls4}
        initial="hidden"
      >
        <h2>Dropmint</h2>
        <motion.p variants={fade}>
          A Sweep Stake Platform created with Django, Web3.py, Solana.py, tweepy and Neverbounce Api.
        </motion.p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <img src={dropmint} alt="dropmint" />
        <Buttons>
          <a target="__blank" href="https://github.com/HectorGitt/twitter-mint">
            Check Code
          </a>
          <a target="__blank" href="http://app.dropmint.com/">
            Preview Live
          </a>
        </Buttons>
      </MovieStyle>

      <MovieStyle
        ref={element5}
        variants={fade}
        animate={controls5}
        initial="hidden"
      >
        <h2>React Dashboard</h2>
        <motion.p variants={fade}>
          A React Admin Dashboard built with Material UI, Nivo Chart, Formik, FullCalendar and Yup.
        </motion.p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <img src={dashboard} alt="dashboard" />
        <Buttons>
          <a target="__blank" href="https://github.com/HectorGitt/react-admin">
            Check Code
          </a>
          <a target="__blank" href="https://admin-dashreact.netlify.app/">
            Preview Live
          </a>
        </Buttons>
      </MovieStyle>

      <MovieStyle
        ref={element6}
        variants={fade}
        animate={controls6}
        initial="hidden"
      >
        <h2>Portfolio</h2>
        <motion.p variants={fade}>
          My portfolio web app created with react,styled-component- react-router, framer
          motion, and react-intersection-observer
        </motion.p>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <img src={portfolio} alt="portfolio" />
        <Buttons>
          <a
            target="__blank"
            href="https://github.com/HectorGitt/portfolio-new"
          >
            Check Code
          </a>
          <a target="__blank" href="https://devhector.netlify.app/">
            Preview Live
          </a>
        </Buttons>
      </MovieStyle>
      <MovieStyle>
      <motion.p variants={fade}>
          Check out my github for more projects
          <Buttons>
          <a
            target="__blank"
            href="https://github.com/hectorGitt"
          >
            Github <FontAwesomeIcon icon={faGithub} />
          </a>
          </Buttons>
        </motion.p>
      </MovieStyle>
    </WorkStyle>

  );
};

const WorkStyle = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem;
  @media (max-width: 900px) {
    padding: 0 2rem;
  }
  p {
    color: #7e7777;
  }
  h2 {
    padding: 1rem 0;
    @media (max-width: 900px) {
      padding: 0;
    }
  }
  background-color: white;
`;

const MovieStyle = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  @media (max-width: 900px) {
    padding-bottom: 4rem;
    margin-bottom: 0;
    padding-top: 2rem;
  }

  img {
    width: 100%;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
const Buttons = styled(motion.div)`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  a {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: #ffffff;
    color: #141414;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    &:hover {
      background-color: #23d997;
      color: #fff;
    }
    @media (max-width: 900px) {
      font-size: 0.7rem;
    }
  }
`;

export default OurWork;
