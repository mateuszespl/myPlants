import styled from "styled-components";

export const StyledSocialMediaList = styled.ul`
  margin: auto 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & > svg {
    width: 0;
    height: 0;
    position: absolute;
  }

  li {
    list-style: none;
    margin: 10px 0;

    a {
      color: unset;
      font-size: ${({ theme }) => theme.fonts.xl};

      svg {
        transition: fill 0.2s;
      }
    }
  }

  li:first-of-type:hover {
    a {
      svg {
        fill: #3b5998;
      }
    }
  }

  li:nth-of-type(2):hover {
    a {
      svg {
        fill: #c4302b;
      }
    }
  }

  li:last-of-type:hover {
    a {
      svg {
        fill: url(#instagram);
      }
    }
  }
`;
