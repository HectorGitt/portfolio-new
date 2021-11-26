import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ham from "../images/icon/nav.svg";
import times from "../images/icon/times.svg";
import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
const Nav = () => {
  const { pathname } = useLocation();
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <NavStyle>
      <h1>
        <Link to="/" id="logo" onClick={closeNav}>
          Portfolio
        </Link>
      </h1>
      <motion.img
        layout
        src={!nav ? ham : times}
        onClick={toggleNav}
        alt="harmburger"
      />
      <AnimateSharedLayout>
        <motion.ul layout className={nav ? "mobile" : ""}>
          <li>
            <Link to="/" onClick={closeNav}>
              1. About Us
            </Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "80%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/work" onClick={closeNav}>
              2. My Work
            </Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "80%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/contact" onClick={closeNav}>
              3. Contact Us
            </Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "80%" : "0%" }}
            />
          </li>
        </motion.ul>
      </AnimateSharedLayout>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 3;
  a {
    color: white;
    text-decoration: none;
  }
  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }
  ul {
    display: flex;
    list-style: none;
    width: 30rem;
    justify-content: space-between;
    @media (max-width: 900px) {
      display: none;
    }
  }
  ul.mobile {
    @media (max-width: 900px) {
      display: grid;
      flex-direction: column;
      position: fixed;
      top: 10vh;
      left: 0;
      height: 50vh;
      background: #282828;
      width: 100vw;
      li {
        padding: 20px;
      }
    }
  }
  li {
    position: relative;
  }

  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
    color: white;
  }
  img {
    display: none;
    width: 30px;
    cursor: pointer;
    @media (max-width: 900px) {
      display: grid;
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 20%;
  @media (max-width: 900px) {
    bottom: 30%;
  }
`;

export default Nav;
