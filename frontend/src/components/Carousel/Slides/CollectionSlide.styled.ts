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

  div {
    height: 50%;
    width: 49%;
    padding: 50px 0 0 50px;
    font-size: 40px;
  }
`;
