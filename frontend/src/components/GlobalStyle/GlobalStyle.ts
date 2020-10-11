import { createGlobalStyle } from "styled-components";

import { mainTheme } from "themes/mainTheme";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@400;500&display=swap');
*{
padding:0;
margin:0;
box-sizing:border-box;
font-family: ${mainTheme.fonts.main}}`;
