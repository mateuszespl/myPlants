import styled from "styled-components";

export const StyledNavbar = styled.nav<{ isMenuOpen: boolean }>`
  position: relative;
  top: 0;
  left: ${({ isMenuOpen }) => (isMenuOpen ? "250px" : "0")};
  transition: left 0.3s;
  z-index: 3;
  width: 100px;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  margin: 0 20px 0 20px;
`;
