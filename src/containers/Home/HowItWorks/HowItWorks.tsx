import React from "react";
import Image from "next/image";

// components
import { HowItWorksStyled } from "./HowItWorks.styles";

// types
import { InterfaceHowItWorks } from "../../../types/pages/Home";


function HowItWorks({ items }: { items: Array<InterfaceHowItWorks> }) {


  return (
    <HowItWorksStyled>
      <h2 className="rate-it-how-it-works__title">How it works?</h2>
      <div className="rate-it-how-it-works__container">
        { items.map((item, index) => (
          <div key={index} className="rate-it-how-it-works__item">
            <div className="rate-it-how-it-works__image-container">
              <Image
                src={item.icon.url}
                layout="fill"
                objectFit="contain"
                alt={`${item.title}`}
              />
            </div>
            <h4 className="rate-it-how-it-works__item-title">{ item.title }</h4>
            <p className="rate-it-how-it-works__item-description">{ item.description }</p>
          </div>
        )) }
      </div>
    </HowItWorksStyled>
  );
}

export default HowItWorks;
