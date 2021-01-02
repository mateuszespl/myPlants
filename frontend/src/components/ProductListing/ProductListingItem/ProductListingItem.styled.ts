import styled from "styled-components";

export const StyledProductListingItem = styled.li`
  width: 18vw;
  height: 18vw;
  padding: 1vw;
  margin: 1vw;
  list-style: none;
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;

  p {
    position: absolute;

    &:first-of-type,
    &:last-of-type {
      top: 1vw;
      left: 1vw;
      width: calc(100% - 2vw);
      background: ${({ theme }) => theme.colors.white};
      padding: 5px;
      font-weight: bold;
      text-align: center;
    }

    &:last-of-type {
      bottom: 1vw;
      top: unset;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
