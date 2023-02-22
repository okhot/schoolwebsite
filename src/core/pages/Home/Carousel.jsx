import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Item } from './Item';
import items from '../../../Data/homeCarousel.json';

export default function CarouselComponent() {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
