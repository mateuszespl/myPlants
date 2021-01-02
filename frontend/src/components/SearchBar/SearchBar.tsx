import React from "react";
import { StyledSearchBar } from "./SearchBar.styled";

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <div>
        <input type="text" placeholder="Search..." name="search" />
      </div>
    </StyledSearchBar>
  );
};
