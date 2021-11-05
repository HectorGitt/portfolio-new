import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavStyle>
      <h1>
        <div id="logo">Portfolio</div>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
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

  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
  }
`;

export default Nav;
