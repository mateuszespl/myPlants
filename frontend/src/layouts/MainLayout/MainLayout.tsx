import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "components/GlobalStyle";
import Navbar from "components/Navbar";
import { mainTheme } from "themes/mainTheme";
import { StyledMainLayout } from "./MainLayout.styled";
import Aside from "components/Aside";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledMainLayout>
        <ThemeProvider theme={mainTheme}>
          <Navbar />
          Layout start
          {children}
          Layout end
          <Aside />
        </ThemeProvider>
      </StyledMainLayout>
    </>
  );
};
