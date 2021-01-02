import styled from "styled-components";

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: ${({ theme }) => theme.colors.transparentBlack};
  z-index: 100;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 70px;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.colors.white};
    z-index: 15;

    input {
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      font-size: ${({ theme }) => theme.fonts.xl};
      padding: 10px 15px;
    }
  }
`;
