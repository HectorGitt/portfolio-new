import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media(max-width: 1700px) {
    font-size: 0.75rem;
  }
}

body {
  background-color: #1b1b1b;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

button {
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: #ffffff;
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;
  &:hover {
    background-color: #23d997;
    color: #fff;
  }
}

h2 {
  font-size: 4rem;
  font-weight: 500;
}

h3 {
  color: #ffffff;
}

h4 {
  font-size: 2rem;
  font-weight: bold;
}

a {
  font-size: 1.1rem;
}

span {
  font-weight: bold;
  color: #23d997;
}

p {
  padding: 3rem 0;
  color: #cccccc;
  font-size: 1.4rem;
  line-height: 1.5;
}

`;

export default GlobalStyle;
