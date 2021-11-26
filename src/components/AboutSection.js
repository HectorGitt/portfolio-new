import home from "../images/about.png";

//styled components
import { Hidden, LayoutStyle, DescriptionStyle, ImageStyle } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { fade, photoAnim, titleAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <LayoutStyle>
      <DescriptionStyle>
        <motion.div>
          <Hidden>
            <motion.h2 variants={titleAnim}>
              A Passionate <span>Engineer</span>
            </motion.h2>
          </Hidden>
          <Hidden>
            <motion.h2 variants={titleAnim}>seeking growth and</motion.h2>
          </Hidden>
          <Hidden>
            <motion.h2 variants={titleAnim}>
              professional development{" "}
            </motion.h2>
          </Hidden>
        </motion.div>
        <motion.p variants={fade}>
          Looking for an avenue to explore, grow and contribute immensely to the
          organizational growth and development.
        </motion.p>
        <motion.a href="mailto:adeniyi.olaitanhector@yahoo.com" variants={fade}>
          Contact Me
        </motion.a>
      </DescriptionStyle>
      <ImageStyle>
        <motion.img
          variants={photoAnim}
          src={home}
          alt="a fresh looking black guy on white shirt"
        />
      </ImageStyle>
      <Wave />
    </LayoutStyle>
  );
};

export default AboutSection;
