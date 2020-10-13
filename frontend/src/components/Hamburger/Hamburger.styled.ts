import styled from "styled-components";

export const StyledHamburger = styled.div<{ isOpen: boolean }>`
  width: 35px;
  height: 14px;
  position: relative;
  overflow: hidden;

  /* Static styling */

  p {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    margin: 15px 0 0 0;
    transition: margin 0.2s;
    line-height: 14px;
    color: black;
  }

  span {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.black};
    transition: width 0.2s;
  }

  span:first-of-type {
    top: 0;
    width: 65%;
  }

  span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  span:last-of-type {
    top: 100%;
    transform: translate(-100%, -100%);
    width: 65%;
    left: 100%;
  }

  /* Styling after hover */
  &:hover {
    p {
      margin: 0;
    }

    span:first-of-type {
      width: 100%;
    }

    span:nth-of-type(2) {
      width: 0%;
    }

    span:last-of-type {
      width: 100%;
    }
  }
`;
