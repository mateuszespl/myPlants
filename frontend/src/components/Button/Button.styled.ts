import styled from "styled-components";

export const StyledButton = styled.div<{
  isLeft: boolean | undefined;
  height: string | undefined;
  menu: boolean | undefined;
}>`
  position: relative;
  display: flex;
  justify-content: ${({ isLeft, menu }) =>
    isLeft || menu ? "space-between" : "flex-start"};
  align-items: center;
  height: ${({ height }) => height};

  span {
    order: ${({ isLeft }) => (isLeft ? 0 : 1)};
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;
