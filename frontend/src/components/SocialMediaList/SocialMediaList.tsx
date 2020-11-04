import React from "react";
import {
  TiSocialFacebookCircular as Facebook,
  TiSocialYoutubeCircular as YouTube,
  TiSocialInstagramCircular as Instagram,
} from "react-icons/ti";

import { StyledSocialMediaList } from "./SocialMediaList.styled";

interface SocialMediaListInterface {}

export const SocialMediaList: React.FC<SocialMediaListInterface> = ({}) => {
  return (
    <StyledSocialMediaList>
      {/* INSTAGRAM GRADIENT */}
      <svg aria-hidden="true" focusable="false">
        <linearGradient id="instagram" x2="1" y2="1">
          <stop offset="0%" stop-color="#405de6" />
          <stop offset="20%" stop-color="#5851db" />
          <stop offset="40%" stop-color="#833ab4" />
          <stop offset="60%" stop-color="#c13584" />
          <stop offset="80%" stop-color="#e1306c" />
          <stop offset="100%" stop-color="#fd1d1d" />
        </linearGradient>
      </svg>
      <li>
        <a href="">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="">
          <YouTube />
        </a>
      </li>
      <li>
        <a href="">
          <Instagram />
        </a>
      </li>
    </StyledSocialMediaList>
  );
};
