import React from 'react';
import {Col, Container, Image, Row } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div >
            <Container className='main' >
            <Row>
              <Col>
                <div>
                    <Image src="https://i.ibb.co/RGXHyBY/Banner.webp" alt="Banner" style={{ width: '100%', height:'auto' }} />  
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                      <div className='d-flex justify-content-center align-items-center h-100'>
                        <h1 className='text-white pb-5'>Big Dream, Easy Achive</h1>
                      </div>
                    </div> 
                  </div>
              </Col>
            </Row>
                
          </Container>
        </div>
    );
};

export default Banner;