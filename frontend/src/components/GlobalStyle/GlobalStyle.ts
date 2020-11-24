import { createGlobalStyle } from "styled-components";

import { mainTheme } from "themes/mainTheme";

export const GlobalStyle = createGlobalStyle`
*{
padding:0;
margin:0;
box-sizing:border-box;
font-family: ${mainTheme.fonts.main}}`;
