import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='pb-5 mb-5'>
            <Carousel variant="dark">
  <Carousel.Item>
  <Image src="
https://i.ibb.co/RGXHyBY/Banner.webp" className='h-25 w-100'alt="First Slide" />     
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src="https://i.ibb.co/hZyHVyd/flat-design-delivery-concept-23-2149147990.jpg" className='h-25 w-100'alt="First Slide" />     
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src="https://i.ibb.co/zGmFmCc/service-24-7-concept-illustration-114360-7380.webp
" className='h-25 w-100'alt="First Slide" />     
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;