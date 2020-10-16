import styled from "styled-components";

export const StyledLink = styled.div`
  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
`;
