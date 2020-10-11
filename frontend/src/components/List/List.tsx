import React from "react";
import { StyledList } from "./List.styled";

interface ListInterface {
  className: string;
  listData: string[];
  height: string;
  margin: string;
}

export const List: React.FC<ListInterface> = ({
  className,
  listData,
  height,
  margin,
}) => {
  return (
    <StyledList
      className={className}
      data-testid={className}
      height={height}
      margin={margin}
    >
      {listData.map((data) => (
        <li key={data}>{data}</li>
      ))}
    </StyledList>
  );
};
