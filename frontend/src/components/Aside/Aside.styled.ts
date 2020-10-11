import styled from "styled-components";

export const StyledAside = styled.aside`
  width: 200px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  margin: 0 0 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 0;
`;
