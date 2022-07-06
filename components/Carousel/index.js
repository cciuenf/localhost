import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Carousel = ({ items, responsive }) => {
  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        disableDotsControls
        paddingLeft="100px"
        responsive={
          responsive || {
            0: { items: 1 },
            960: { items: 2 },
            1024: { items: 3 },
          }
        }
      />
    </>
  );
};
