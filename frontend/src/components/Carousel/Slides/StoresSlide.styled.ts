import styled from "styled-components";

export const StyledStoresSlide = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  height: 100%;

  > div {
    header {
      height: 100%;
      display: flex;
      align-items: center;
      h1 {
        font-size: ${({ theme }) => theme.fonts.xxl};
      }
    }
  }

  div {
    position: relative;
    width: 33%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
      width: 100%;
      height: 75%;
      object-fit: cover;
      object-position: center center;
    }
  }
`;
