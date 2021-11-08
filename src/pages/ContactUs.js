//ANIMATION
import { motion } from "framer-motion";
import { pageAnime } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnime}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};
export default ContactUs;
