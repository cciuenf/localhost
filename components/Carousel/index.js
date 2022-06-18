import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Carousel = ({ items }) => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        disableDotsControls
        paddingLeft="100px"
        responsive={{
          0: { items: 1 },
          820: { items: 2 },
          1024: { items: 3 },
        }}
      />
    </>
  );
};
