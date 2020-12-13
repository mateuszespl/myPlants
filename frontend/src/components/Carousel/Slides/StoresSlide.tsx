import React from "react";

import { StyledStoresSlide } from "./StoresSlide.styled";

export const StoresSlide: React.FC = () => {
  return (
    <StyledStoresSlide>
      <div className="stores">
        <div>
          <img
            alt="storePic"
            src="https://images.pexels.com/photos/1684004/pexels-photo-1684004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div>
            <h2>Poznań</h2>
            <p>Rolna 3A</p>
            <p>Open: 9 - 17</p>
          </div>
        </div>
        <div>
          <img
            alt="storePic"
            src="https://images.pexels.com/photos/880463/pexels-photo-880463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div>
            <h2>Poznań</h2>
            <p>Dolna Wilda 88</p>
            <p>Open: 9 - 17</p>
          </div>
        </div>
        <div>
          <img
            alt="storePic"
            src="https://images.pexels.com/photos/5778479/pexels-photo-5778479.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <div>
            <h2>Wrocław</h2>
            <p>Głogowska 1</p>
            <p>Open: 9 - 17</p>
          </div>
        </div>
      </div>
    </StyledStoresSlide>
  );
};
