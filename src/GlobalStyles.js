import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` html {
  box-sizing: border-box;
};

*,
::after,
::before {
  box-sizing: inherit;
};

body {
  margin: 0 auto;
  padding: 0;
  max-width: 1400px;
  background-color: #fff;
  color: #1f1f1f;
  font-family: 'Montserrat', sans-serif;
}`;
