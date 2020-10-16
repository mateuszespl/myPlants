import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 20px;
`;
