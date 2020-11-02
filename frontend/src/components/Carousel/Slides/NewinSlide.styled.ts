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
    top: unset;
    bottom: 0;
    background: yellow;
    z-index: 1;

    span {
      background: ${({ theme }) => theme.colors.black};
    }
  }
`;
