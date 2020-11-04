import React from "react";

import Text from "components/Text";
import { StyledScrollSpan } from "./ScrollSpan.styled";
import { BsArrowDown } from "react-icons/bs";

export const ScrollSpan: React.FC = ({}) => {
  return (
    <StyledScrollSpan>
      <span>
        <Text text="Scroll down" component="p" />
        <BsArrowDown />
      </span>
    </StyledScrollSpan>
  );
};
