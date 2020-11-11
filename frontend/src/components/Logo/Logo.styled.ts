import styled from "styled-components";

export const StyledLogo = styled.div`
  height: 40%;
  position: relative;

  header {
    display: flex;
    align-items: center;

    h2 {
      font-family: ${({ theme }) => theme.fonts.condensed};
      font-size: ${({ theme }) => theme.fonts.l};
      font-weight: bold;
      margin: 0 5px 0 0;
    }
  }
`;
