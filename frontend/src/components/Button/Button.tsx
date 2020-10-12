import Hamburger from "components/Hamburger";
import React from "react";

import { StyledButton } from "./Button.styled";

interface ButtonInterface {
  handleClick: () => void;
  icon?: {
    iconSrc: any;
    isLeft: boolean;
  };
  text: string;
  className: string;
  height?: string;
  menu?: boolean;
}

export const Button: React.FC<ButtonInterface> = ({
  handleClick,
  icon,
  text,
  className,
  height,
  menu,
}) => {
  return (
    <StyledButton isLeft={icon && icon.isLeft} height={height} menu={menu}>
      {icon && <span>{icon.iconSrc}</span>}
      <button
        className={className}
        data-testid={className}
        onClick={handleClick}
      >
        {text}
      </button>
      {menu && <Hamburger isOpen={false} />}
    </StyledButton>
  );
};
