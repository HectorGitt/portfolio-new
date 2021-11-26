import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {

}
.mobile {
  @media (max-width:900px){
    display: grid
  };
}

body {
  background-color: #1b1b1b;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  width: 100vw;
}

button {
  
}

h2 {
  font-size: 2rem;
  font-weight: 500;
  @media (max-width:900px){
    margin-top: 200px;
  };
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
