import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 200px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
`;
