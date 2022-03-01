import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Memories = () => {
    return (
        <div>
            <h1>Happy Memories</h1>
            <Container className='bg-pink text-white'>
                <Row className='py-4 m-1'>
                    <Col>
                        <div className='h-25 w-100'>
                        <Image src="https://i.ibb.co/FqHb87h/Memories-1.png" className=''alt="First Slide" />     
                        </div>
                       
                    </Col>
                    <Col> 
                    <div className='p-2'>
                        <Image src="https://i.ibb.co/YBLmSPd/Memories-2.png" className=''alt="First Slide" />     
                        </div>
                    </Col>
                    <Col> 
                    <div className='h-25 w-100'>
                        <Image src="https://i.ibb.co/DQfgsQL/Memories-3.png" className=''alt="First Slide" />     
                        </div>
                    </Col>
                </Row>
                <Row className='m-4'>
                    <Col>
                        <div className='h-25 w-100'>
                        <Image src="https://i.ibb.co/N1bmr0t/Memories-6.png" className=''alt="First Slide" />     
                        </div>
                    </Col>
                    <Col> 
                        <div className='p-2'>
                        <Image src="https://i.ibb.co/4KH4zjq/Memories-5.png" className=''alt="First Slide" />     
                        </div>
                    </Col>
                    <Col className='my-5'> 
                        <div className='h-25 w-100'>
                        <Image src="https://i.ibb.co/jyszwvJ/Memories-4.png" className=''alt="First Slide" />     
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Memories;