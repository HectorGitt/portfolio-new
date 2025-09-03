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
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
  max-width: 100%;
  color: #e2e8f0;
  line-height: 1.6;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width:900px){
    margin-top: 200px;
    font-size: 2rem;
  };
}

h3 {
  color: #ffffff;
  font-size: 1.8rem;
}

h4 {
  font-size: 2.2rem;
  font-weight: 600;
  color: #f8fafc;
}

a {
  font-size: 1.1rem;
  color: #00d4ff;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color: #23d997;
  }
}

span {
  font-weight: bold;
  color: #23d997;
  background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile_hide {
  @media (max-width:900px){
    display: none;
  };
}

p {
  padding: 2rem 0;
  color: #cbd5e1;
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 600px;
}

.question:active {
  background-color: none;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a2e;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #23d997 0%, #00d4ff 100%);
}

/* Selection */
::selection {
  background: rgba(0, 212, 255, 0.3);
  color: #ffffff;
}

`;

export default GlobalStyle;
