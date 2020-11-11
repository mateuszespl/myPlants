import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "components/GlobalStyle";
import Navbar from "components/Navbar";
import { mainTheme } from "themes/mainTheme";
import { StyledMainLayout } from "./MainLayout.styled";
import Aside from "components/Aside";
import Menu from "components/Menu";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledMainLayout className="layoutWrapper">
        <ThemeProvider theme={mainTheme}>
          <Menu />
          <Navbar />
          <section className="content">{children}</section>
          <Aside />
        </ThemeProvider>
      </StyledMainLayout>
    </>
  );
};
