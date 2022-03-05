import {  } from 'bootstrap';
import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
      <Container style={{ width: '80%', height:'auto' }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/3sgGThx/s.jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{ color: 'black', fontSize:'30px'}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/gg0gRh5/Slider-3.png"
            alt="Second slide"
          />
          <Carousel.Caption style={{ color: 'black', fontSize:'30px'}}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-auto"
            src="https://i.ibb.co/Vj0c91G/Slider.jpg"
            alt="Third slide"
          />
           <Carousel.Caption style={{ color: 'black', fontSize:'30px'}}>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
    );
};

export default Banner;