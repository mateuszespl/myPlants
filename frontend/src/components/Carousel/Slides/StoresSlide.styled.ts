import styled from "styled-components";

export const StyledStoresSlide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .stores {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    height: 100%;

    div {
      position: relative;
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      div {
        position: absolute;
        color: white;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }
  }
`;
