import styled from "styled-components";

export const StyledScrollSpan = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 45%;

  span {
    transform: rotate(90deg);
    display: flex;
    align-items: center;
    position: relative;

    svg {
      transform: rotate(-90deg);
      font-size: 50px;
    }
  }
`;
