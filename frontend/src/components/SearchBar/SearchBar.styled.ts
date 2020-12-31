import styled from "styled-components";

export const StyledSearchBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 60px;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  z-index: 15;
`;
