import styled from "styled-components";

export const StyledAside = styled.aside`
  width: 100px;
  overflow: hidden;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  margin: 0 20px 0 20px;
`;
