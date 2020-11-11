import styled from "styled-components";

export const StyledScrollSpan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  margin: auto 0 0 0;

  p {
    white-space: nowrap;
    margin: 0 10px;
  }

  span {
    transform: rotate(90deg);
    display: flex;
    align-items: center;
    position: relative;

    svg {
      transform: rotate(-90deg);
      font-size: ${({ theme }) => theme.fonts.xxl};
    }
  }
`;
