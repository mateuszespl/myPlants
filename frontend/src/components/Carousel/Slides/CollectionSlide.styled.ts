import styled from "styled-components";

export const StyledCollectionSlide = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  align-content: space-between;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;

    &:first-of-type {
      height: 100%;
      width: 50%;
    }

    &:last-of-type {
      height: 50%;
      width: 49%;
    }
  }

  > div {
    height: 49%;
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 0 50px 50px;

    header {
      h1 {
        font-size: ${({ theme }) => theme.fonts.xxl};
      }
    }

    a {
      font-size: ${({ theme }) => theme.fonts.l};
      font-family: ${({ theme }) => theme.fonts.condensed};
      font-weight: bold;
    }
  }
`;
