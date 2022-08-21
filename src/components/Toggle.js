import { motion } from "framer-motion";
import { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <motion.div layout className="question" onClick={() => setToggle((toggle) => !toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="line"></div>
    </motion.div>
  );
};

export default Toggle;
