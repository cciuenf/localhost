import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import News from "../News"

const handleDragStart = (e) => e.preventDefault();

const items = [
    <News title="lorem ipsum" link="www.gogle.com" img="/assets/IMG.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <News title="lorem ipsum" link="www.gogle.com" img="/assets/IMG.jpeg" onDragStart={handleDragStart} role="presentation" />,
    <News title="lorem ipsum" link="www.gogle.com" img="/assets/IMG.jpeg" onDragStart={handleDragStart} role="presentation" />,
];

export const Carousel = () => {
  return (
    <>
        <AliceCarousel 
        mouseTracking 
        items={items}
        disableDotsControls 
        paddingLeft="100px"
        responsive={{
            0: { items: 1,},
            820: { items: 2},
            1024: { items: 3}
          }}
        />
    </>
  );
};
