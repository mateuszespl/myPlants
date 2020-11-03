import styled from "styled-components";

export const StyledNewinSlide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.main};

  div {
    position: relative;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  .swiper-pagination {
    position: absolute;
    top: unset;
    bottom: 20px;
    height: 15px;
    background: transparent;

    span {
      background: ${({ theme }) => theme.colors.white};
    }
  }

  .header {
    position: absolute;
    left: 0;
    width: 20%;
    height: 100px;
    bottom: 35px;
    background: ${({ theme }) => theme.colors.white};
    z-index: 10;
    header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      h1 {
        font-size: ${({ theme }) => theme.fonts.l};
        font-family: ${({ theme }) => theme.fonts.condensed};
        font-weight: bold;
      }
    }
  }
`;
