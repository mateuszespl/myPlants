import GlobalStyle from "components/GlobalStyle";
import React from "react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "themes/mainTheme";
import { StyledMainLayout } from "./MainLayout.styled";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledMainLayout>
        <ThemeProvider theme={mainTheme}>
          Layout start
          {children}
          Layout end
        </ThemeProvider>
      </StyledMainLayout>
    </>
  );
};
