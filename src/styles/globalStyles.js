import { createGlobalStyle } from "styled-components";
import SpaceGrotesk from "./../assets/fonts/SpaceGrotesk-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Space Grotesk";
    src: url(${SpaceGrotesk}) format("truetype");
  }

  *,
  *::before,
  *::after {
  box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5, h6, ul, li, body, button, a {
  margin: 0;
  padding: 0;
  }

  li {
  list-style: none;
  }

  button {
  cursor: pointer;
  }

  a {
  text-decoration: none;
  color: #FFFFFF;
  }

  html {
  overflow-x: hidden;
  scroll-behavior: smooth;
  }

  body {
  font-family: "Space Grotesk", sans-serif;
  color: #FFFFFF;
  
  background-color: #151515;
  overflow: hidden;
  }

  img {
		display: block;
		width: 100%;
		height: 100%;
	}
`;

export { GlobalStyles };

// #615bc5