import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

//import styles
import { LayoutStyle } from "../styles";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <FaqStyle
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Who is an Engineer?">
          <div className="answer">
            <p>
              Engineers are professionals who invent, design, analyze, build and
              test complex systems, structures, gadgets and materials to fulfill
              functional objectives while considering the limitations imposed by
              practicality, regulation, safety and cost.
            </p>
          </div>
        </Toggle>
        <Toggle title="How do you feel about our current state of technology?">
          <div className="answer">
            <p>
              As a tech aficionado, I am always excited about new technological
              advancements. This makes me follow up on new trends unveiled in
              the industry.
            </p>
          </div>
        </Toggle>
        <Toggle title="What is the relation between your course of study and what you do?">
          <div className="answer">
            <p>
              I strongly believe that these new advancements can be explored to
              proffer solutions to the numerous problems encountered in the
              agricultural sector as well as creating innovative opportunities
              for agricultural engineering and the general agricultural
              marketplace.
            </p>
          </div>
        </Toggle>
        <Toggle title="How do you fit in these places?">
          <div className="answer">
            <p>
              I am confident that I can contribute immensely to these
              developments that have great capabilities of positively affecting
              the society at large.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqStyle>
  );
};

const FaqStyle = styled(LayoutStyle)`
  margin-top: 200px;
  display: block;
  span {
    display: block;
  }
  & > * {
    cursor: pointer;
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
