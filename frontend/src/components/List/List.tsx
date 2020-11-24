import React from "react";

import { StyledList } from "./List.styled";

interface ListInterface {
  className: string;
  listData: any[];
  height?: string;
  margin?: string;
  padding?: string;
}

export const List: React.FC<ListInterface> = ({
  className,
  listData,
  height,
  margin,
  padding,
}) => {
  return (
    <StyledList
      padding={padding}
      className={className}
      data-testid={className}
      height={height}
      margin={margin}
    >
      {listData.map((data, id) => (
        <li key={`${data}:${id}`}>{data}</li>
      ))}
    </StyledList>
  );
};
