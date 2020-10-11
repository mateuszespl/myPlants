import styled from "styled-components";

export const StyledLogo = styled.div`
  height: 10%;
  h2 {
    font-family: ${({ theme }) => theme.fonts.condensed};
    font-size: ${({ theme }) => theme.fonts.l};
    font-weight: bold;
  }
`;
