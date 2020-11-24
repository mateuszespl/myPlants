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

          a {
            color: ${({ theme }) => theme.colors.black};
            text-decoration: none;
            position: relative;

            &.active::after {
              background: black;
            }

            &:hover::after {
              background: black;
            }

            &::after {
              content: "";
              display: block;
              width: 5px;
              height: 5px;
              background-color: transparent;
              position: absolute;
              left: -10px;
              top: 50%;
              transform: translateY(-50%);
              transition: background-color 0.2s;
            }
          }

          &:first-of-type {
            margin: 20px 0 10px 0;
          }
        }
      }
    }
  }
`;
