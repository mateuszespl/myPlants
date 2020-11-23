import React from "react";
import { GrCart, GrSearch } from "react-icons/gr";
import { MdInsertEmoticon } from "react-icons/md";

import constants from "config";
import { StyledAside } from "./Aside.styled";
import Pagination from "components/Carousel/Pagination";
import Button from "components/Button";
import List from "components/List";
import ScrollSpan from "./ScrollSpan";

interface AsideInterface {
  category?: boolean;
}

export const Aside: React.FC<AsideInterface> = ({ category }) => {
  return (
    <StyledAside
      className={constants.aside.className}
      data-testid={constants.aside.className}
    >
      <List
        className="hej"
        listData={[
          <Button
            handleClick={() => ""}
            className="cart"
            menu
            icon={{ iconSrc: <GrCart />, isLeft: false }}
          />,
          <Button
            handleClick={() => ""}
            className="search"
            menu
            icon={{ iconSrc: <GrSearch />, isLeft: false }}
          />,
          <Button
            handleClick={() => ""}
            className="profile"
            menu
            icon={{ iconSrc: <MdInsertEmoticon />, isLeft: false }}
          />,
        ]}
        height="45%"
        margin="0"
        padding="0 0 150px 0"
      ></List>
      {!category && (
        <>
          <Pagination />
          <ScrollSpan />
        </>
      )}
    </StyledAside>
  );
};
