import styled from "styled-components";

export const StyledScrollSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45%;
  transform: rotate(90deg);

  span {
    display: flex;
    align-items: center;

    svg {
      transform: rotate(-90deg);
      font-size: 70px;
    }
  }
`;
