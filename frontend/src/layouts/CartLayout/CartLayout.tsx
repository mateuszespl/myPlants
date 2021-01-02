import React from "react";
import { ThemeProvider } from "styled-components";

import Aside from "components/Aside";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import GlobalStyle from "components/GlobalStyle";
import { StyledCartLayout } from "./CartLayout.styled";
import { mainTheme } from "themes/mainTheme";

interface CartLayoutInterface {}

export const CartLayout: React.FC<CartLayoutInterface> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledCartLayout>
        <ThemeProvider theme={mainTheme}>
          <Navbar />
          <Menu />
          <section className="content">{children}</section>
          <Aside category />
        </ThemeProvider>
      </StyledCartLayout>
    </>
  );
};
