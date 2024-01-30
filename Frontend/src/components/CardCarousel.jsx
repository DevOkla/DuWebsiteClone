// src/components/CardCarousel.js
import React from "react";
import Card from "./Card";

const CardCarousel = ({ data }) => {
  return (
    <div className="flex flex-row w-full  gap-5 ">
      {data.map((section, index) => (
        <div key={index} className="flex flex-wrap mr-4">
          {section.map((card, cardIndex) => (
            <Card key={cardIndex} {...card} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardCarousel;
