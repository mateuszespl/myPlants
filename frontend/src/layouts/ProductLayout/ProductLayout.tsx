import React from "react";
import { ThemeProvider } from "styled-components";

import Aside from "components/Aside";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import GlobalStyle from "components/GlobalStyle";
import { StyledProductLayout } from "./ProductLayout.styled";
import { mainTheme } from "themes/mainTheme";
import Categories from "components/Categories";

interface ProductLayoutInterface {}

export const ProductLayout: React.FC<ProductLayoutInterface> = ({
  children,
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledProductLayout>
        <ThemeProvider theme={mainTheme}>
          <Navbar />
          <Menu />
          <section className="content">Product{children}</section>
          <Aside category />
        </ThemeProvider>
      </StyledProductLayout>
    </>
  );
};
