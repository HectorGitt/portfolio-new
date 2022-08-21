import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mobile {
  @media (max-width:900px){
    display: grid
  };
}
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width:900px){
    align-items:center;
    justify-content:center;
  };
}

body {
  background-color: #1b1b1b;
  font-family: 'Kdam Thmor Pro', sans-serif;
  overflow-x: hidden;
  max-width: 100%;
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
.mobile_hide {
  @media (max-width:900px){
    display: none;
  };
}
p {
  padding: 3rem 0;
  color: #cccccc;
  font-size: 1.4rem;
  line-height: 1.5;
}
.question:active {
  background-color: none;
}

`;

export default GlobalStyle;
