import React from "react";
import {
  TiSocialFacebookCircular as Facebook,
  TiSocialYoutubeCircular as YouTube,
  TiSocialInstagramCircular as Instagram,
} from "react-icons/ti";

import { StyledSocialMediaList } from "./SocialMediaList.styled";

interface SocialMediaListInterface {}

export const SocialMediaList: React.FC<SocialMediaListInterface> = () => {
  return (
    <StyledSocialMediaList>
      {/* INSTAGRAM GRADIENT */}
      <svg aria-hidden="true" focusable="false">
        <linearGradient id="instagram" x2="1" y2="1">
          <stop offset="0%" stopColor="#405de6" />
          <stop offset="20%" stopColor="#5851db" />
          <stop offset="40%" stopColor="#833ab4" />
          <stop offset="60%" stopColor="#c13584" />
          <stop offset="80%" stopColor="#e1306c" />
          <stop offset="100%" stopColor="#fd1d1d" />
        </linearGradient>
      </svg>
      <li>
        <a href="https://www.facebook.com/">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/">
          <YouTube />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <Instagram />
        </a>
      </li>
    </StyledSocialMediaList>
  );
};
