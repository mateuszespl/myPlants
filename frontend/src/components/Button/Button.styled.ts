import styled from "styled-components";

export const StyledButton = styled.div<{
  isLeft: boolean | undefined;
  height: string | undefined;
  width: string | undefined;
  menu: boolean | undefined;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  cursor: pointer;

  span {
    order: ${({ isLeft }) => (isLeft ? 0 : 1)};
  }

  button {
    all: unset;
  }

  svg {
    font-size: ${({ theme }) => theme.fonts.xl};
  }
`;
