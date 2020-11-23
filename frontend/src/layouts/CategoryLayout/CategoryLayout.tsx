import React from "react";
import { ThemeProvider } from "styled-components";

import Aside from "components/Aside";
import Navbar from "components/Navbar";
import Menu from "components/Menu";
import GlobalStyle from "components/GlobalStyle";
import { StyledCategoryLayout } from "./CategoryLayout.styled";
import { mainTheme } from "themes/mainTheme";
import Categories from "components/Categories";

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
          <section className="content">
            <Categories />
            {children}
          </section>
          <Aside category />
        </ThemeProvider>
      </StyledCategoryLayout>
    </>
  );
};
