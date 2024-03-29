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
        Technical <span>Skills</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Html">
          <div className="answer">
            <p>
              Accessibility, Semantic Elements, Forms and Validations, SEO Basics, Multimedia.
            </p>
          </div>
        </Toggle>
        <Toggle title="CSS">
          <div className="answer">
            <p>
              BEM, Flexbox, Grid, Animations, Responsive design, neumorphism, glassmorphism, Transitions, Bootstrap, Tailwind , SCSS.
            </p>
          </div>
        </Toggle>
        <Toggle title="JavaScript">
          <div className="answer">
            <p>
              Functional Expressions, Closure, Async, Hoisting, Callbacks, Destructuring, JQuery, NPM, Typescript.
            </p>
          </div>
        </Toggle>
        <Toggle title="React">
          <div className="answer">
            <p>
              JSX, Webpack,Components , React-hooks, React-redux, react intersection observer, react-router, React-context ,React-Redux, Framer motion, Graphql, NextJs.
            </p>
          </div>
        </Toggle>
        <Toggle title="Python">
          <div className="answer">
            <p>
            Django, Flask, SQLAlchemy, Tweepy, Web3.py, Solana.py, pillow, Tkinter, Selenium, Object Oriented Programming, Data Structures and algorithms.
            </p>
          </div>
        </Toggle>
        <Toggle title="Other Tech Skills">
          <div className="answer">
            <p>
              CI/CD, Kubernetes, Docker, Git, MySql, Postgresql,OOP, Java Fundamentals, C Fundamentals, Firebase,  Celery, Redis, Automation and bot development, Cryptography, Identity Access Management.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqStyle>
  );
};

const FaqStyle = styled(LayoutStyle)`
  display: block;
  height: fit-content;
  max-width:100%;
  @media (max-width: 900px) {
    margin-top: 0;
    text-align: left;
  }
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
    margin: 1rem 0;
    width: 100%;
  }
  .question {
    padding: 0;
  }
  .answer {
    padding: 0;
    height: fit-content;
  }
  .answer p {
    padding: 1.5rem 0;
  }
`;

export default FaqSection;
