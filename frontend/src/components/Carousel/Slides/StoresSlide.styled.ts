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
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 200px;
        width: 80%;
        color: ${({ theme }) => theme.colors.black};
        background: ${({ theme }) => theme.colors.white};

        h2 {
          font-family: ${({ theme }) => theme.fonts.condensed};
          margin: 0 0 20px 0;
        }
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
