import { createGlobalStyle } from "styled-components";
import { color, font, bp } from "../theme";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${color.vellum};
    color: ${color.ink};
    font-family: ${font.body};
    font-size: 17px;
    line-height: 1.62;
    overflow-x: hidden;
    /* Faint drafting grid. Two hairlines at 32px, never louder than the text. */
    background-image:
      linear-gradient(to right, rgba(88, 97, 92, 0.055) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(88, 97, 92, 0.055) 1px, transparent 1px);
    background-size: 32px 32px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${bp.md} {
      font-size: 16px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${font.display};
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  a {
    color: ${color.blueprint};
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font: inherit;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  /* Tabular figures everywhere numbers are compared down a column. */
  .num {
    font-family: ${font.data};
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum" 1;
  }

  ::selection {
    background: ${color.blueprint};
    color: ${color.sheet};
  }

  :focus-visible {
    outline: 2px solid ${color.signal};
    outline-offset: 3px;
  }

  ::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }
  ::-webkit-scrollbar-track {
    background: ${color.sheetSunk};
  }
  ::-webkit-scrollbar-thumb {
    background: ${color.rule};
    border: 3px solid ${color.sheetSunk};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${color.graphite};
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
