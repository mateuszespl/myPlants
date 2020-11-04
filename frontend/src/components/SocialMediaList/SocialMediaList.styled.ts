import styled from "styled-components";

export const StyledSocialMediaList = styled.ul`
  margin: auto 0 0 0;
  display: flex;
  justify-content: space-around;
  padding: 0 20px 0 0;

  & > svg {
    width: 0;
    height: 0;
    position: absolute;
  }

  li {
    list-style: none;

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
