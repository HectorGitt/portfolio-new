import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ham from "../images/icon/nav.svg";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <NavStyle>
      <h1>
        <Link to="/" id="logo">
          Portfolio
        </Link>
      </h1>
      <img src={ham} alt="harmburger" />

      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "80%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. My Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "80%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "80%" : "0%" }}
          />
        </li>
      </ul>
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
  ul {
    display: flex;
    list-style: none;
    width: 30rem;
    justify-content: space-between;
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
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 20%;
`;

export default Nav;
