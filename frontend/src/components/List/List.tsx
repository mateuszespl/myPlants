import React from "react";

import Text from "components/Text";
import { StyledList } from "./List.styled";

interface ListInterface {
  className: string;
  listData: string[];
  height: string;
  margin: string;
  text?: {
    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
  };
}

export const List: React.FC<ListInterface> = ({
  className,
  listData,
  height,
  margin,
  text,
}) => {
  return (
    <StyledList
      className={className}
      data-testid={className}
      height={height}
      margin={margin}
    >
      {listData.map((data) =>
        text ? (
          <Text
            text={data}
            fontSize={text.fontSize}
            fontWeight={text.fontWeight}
            fontFamily={text.fontFamily}
            component={"h3"}
          />
        ) : (
          <li key={data}>{data}</li>
        )
      )}
    </StyledList>
  );
};
