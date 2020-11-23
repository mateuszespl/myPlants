import styled from "styled-components";

export const StyledCategories = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;

  .categories {
    justify-content: space-around;
    display: flex;

    & > li {
      list-style: none;
      font-weight: bold;
      font-size: ${({ theme }) => theme.fonts.xl};

      & > ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 0 0 25px;

        & > li {
          margin: 10px 0;
          font-weight: normal;
          list-style: none;
          font-size: ${({ theme }) => theme.fonts.l};

          &:first-of-type {
            margin: 20px 0 10px 0;
          }
        }
      }
    }
  }
`;
