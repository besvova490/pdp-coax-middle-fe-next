import React from "react";
import Image from "next/image";

// components
import TopSectionStyled from "./TopSection.styles";

// types
import { InterfaceTopSection } from "../../../types/pages/Home";


function TopSection({ image, description, title }: InterfaceTopSection) {


  return (
    <TopSectionStyled>
      <div className="rate-it-home__text-container">
        <h1 className="rate-it-home__title">{ title }</h1>
        <h3 className="rate-it-home__description">{ description }</h3>
      </div>
      <div className="rate-it-home__image-container">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          alt={`${title}`}
        />
      </div>
    </TopSectionStyled>
  );
}

export default TopSection;
