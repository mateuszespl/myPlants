import React from "react";

import Aside from "components/Aside";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import GlobalStyle from "components/GlobalStyle";
import { StyledCategoryLayout } from "./CategoryLayout.styled";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "themes/mainTheme";

interface CategoryLayoutInterface {}

export const CategoryLayout: React.FC<CategoryLayoutInterface> = ({
  children,
}) => {
  return (
    <>
      <GlobalStyle />
      <StyledCategoryLayout>
        <ThemeProvider theme={mainTheme}>
          <Menu />
          <Navbar />
          <section className="content">{children}</section>
          <Aside />
        </ThemeProvider>
      </StyledCategoryLayout>
    </>
  );
};
