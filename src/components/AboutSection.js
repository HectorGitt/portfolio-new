import home from "../images/about.png";

//styled components
import { Hidden, LayoutStyle, DescriptionStyle, ImageStyle } from "../styles";
//framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const headAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const cont = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 1,
        when: "afterChildren",
      },
    },
  };
  return (
    <LayoutStyle>
      <DescriptionStyle>
        <motion.div
          className="title"
          variants={cont}
          initial="hidden"
          animate="show"
        >
          <Hidden>
            <motion.h2 variants={headAnim}>We work to make</motion.h2>
          </Hidden>
          <Hidden>
            <motion.h2 variants={headAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hidden>
          <Hidden>
            <motion.h2 variants={headAnim}>true.</motion.h2>
          </Hidden>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professional with amazing skills
        </p>
        <button>Contact Us</button>
      </DescriptionStyle>
      <ImageStyle>
        <img src={home} alt="a fresh looking black guy on white shirt" />
      </ImageStyle>
    </LayoutStyle>
  );
};

export default AboutSection;
