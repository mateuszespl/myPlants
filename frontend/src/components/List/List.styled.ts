import styled from "styled-components";

export const StyledList = styled.ul<{
  height: string | undefined;
  margin: string | undefined;
  padding: string | undefined;
}>`
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
