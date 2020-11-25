import styled from "styled-components";

export const StyledListedProduct = styled.li`
  width: 18vw;
  height: 18vw;
  padding: 1vw;
  margin: 1vw;
  list-style: none;
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;

  p {
    position: absolute;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
