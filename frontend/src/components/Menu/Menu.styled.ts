import styled from "styled-components";

export const StyledMenu = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  z-index: 2;
  left: ${({ isMenuOpen }) => (isMenuOpen ? "-30px" : "-320px")};
  top: 0;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s;

  ul {
    height: 50%;
    justify-content: space-around;

    li {
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fonts.xxl};
        width: 100%;
        transition: text-shadow 0.2s;

        &:hover {
          text-shadow: 0px 0px 2px ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`;
