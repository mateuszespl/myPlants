import styled from "styled-components";

export const StyledPromoSlide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .header {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24%;
    height: 100px;
    background: ${({ theme }) => theme.colors.white};
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
