import React from "react";

import { StyledListItem } from "./ListItem.styled";

interface ListItemInterface {
  className: string;
}

export const ListItem: React.FC<ListItemInterface> = ({ className }) => {
  return <StyledListItem as="p" className={className}></StyledListItem>;
};
