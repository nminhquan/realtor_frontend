import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './carousel.css'

const items = [
  {
    src: 'https://images-na.ssl-images-amazon.com/images/G/01/img18/events/blackfriday/landingpage/cdbf_desktop_1500x300_v3.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://images-na.ssl-images-amazon.com/images/G/01/dex/2018/CFS/Dex_CFS_GW_DesktopHero_1500x600_1x._CB480800597_.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2018/CAMPAIGN/Holiday/November-1/TAB/gateway/Karnak-Tall-GW-3000x1200-2X._CB480591846_.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Carousel = () => {
  return <div className="carousel-top" >
    <UncontrolledCarousel items={items} />
  </div>;
}

export default Carousel;