import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Memories = () => {
    return (
        <div className='p-3'>
            <h1>Happy Memories</h1>
            <Container className='bg-pink text-white'>
                <Row className='py-5 m-2'>
                    <Col>
                        <div className=''>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.ibb.co/FqHb87h/Memories-1.png"  />
                            </Card>   
                        </div>
                    </Col>
                    <Col> 
                        <div className=''>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src="https://i.ibb.co/YBLmSPd/Memories-2.png" />
                            </Card>   
                        </div>
                    </Col>
                    <Col> 
                        <div className=''>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src="https://i.ibb.co/DQfgsQL/Memories-3.png" />
                            </Card>   
                        </div>
                    </Col>
                </Row>
                <Row className='py-5 m-2'>
                    <Col>
                        <div className=''>
                            <Card style={{ width: '19rem' }}>
                                <Card.Img variant="top" src="https://i.ibb.co/N1bmr0t/Memories-6.png"  />
                            </Card>   
                        </div>
                    </Col>
                    <Col> 
                        <div className=''>
                            <Card style={{ width: '22rem' }}>
                                <Card.Img variant="top" src="https://i.ibb.co/jyszwvJ/Memories-4.png" />
                            </Card>   
                        </div>
                    </Col>
                    <Col> 
                        <div className=''>
                            <Card style={{ width: '21rem' }}>
                                <Card.Img variant="top"  src="https://i.ibb.co/4KH4zjq/Memories-5.png" />
                            </Card>   
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Memories;