import styled from "styled-components";

export const StyledButton = styled.div<{
  isLeft: boolean | undefined;
  height: string | undefined;
  width: string | undefined;
  menu: boolean | undefined;
}>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  cursor: pointer;
  ${({ menu, theme }) =>
    menu
      ? `
      background:${theme.colors.black};
      border-radius:20px 0 0 20px;
      color:${theme.colors.white};
      width:135px;
      right:-55px;
      padding:5px 25px 5px 0;
      path{
        stroke:${theme.colors.white};
      }
      `
      : ""};

  span {
    order: ${({ isLeft }) => (isLeft ? 0 : 1)};
  }

  button {
    all: unset;
  }

  svg {
    margin: 0 0 0 20px;
    font-size: ${({ theme }) => theme.fonts.xl};
  }
`;
