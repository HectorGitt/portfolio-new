//ANIMATION
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnime, titleAnim } from "../animation";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnime}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
              <Circle />
              <h2>Send An Email</h2>
              <span>
              <a href="mailto:adeniyi.olaitanhector@yahoo.com">
                <FontAwesomeIcon icon={faMessage} size="2x" />
              </a>
              </span>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Connect with me</h2>
            <Link>
            <span>
              <a
                target="__blank"
                href="https://www.linkedin.com/in/adeniyi-olaitan-b72100143/"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </span>
            <span>
              <a target="__blank" href="https://github.com/hectorGitt">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </span>
            </Link>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  background-color: white;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  a {
    color: #353535;
  }
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color:inherit;
  gap: 2rem;
`;

export default ContactUs;
