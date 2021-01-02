import React from "react";

import Carousel from "components/Carousel";
import SearchBar from "components/SearchBar";
import MainLayout from "layouts/MainLayout";

export const Home = () => {
  return (
    <MainLayout>
      {/* <SearchBar /> */}
      <Carousel />
    </MainLayout>
  );
};
