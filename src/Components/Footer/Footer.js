import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-4 m-1'>
            <Container >
                <Row>
                    <Col xs={6}>
                        <h3>Our Services</h3>
                        <ul className='our-service'>
                            <li>Food Delivery </li>
                            <li>Bike Ride </li>
                            <li>Parcel Delivery </li>
                        </ul>
                    </Col>
                    <Col>
                        <div>
                        <h3>Quick Links</h3>
                        </div>
                    </Col>
                    <Col>
                        <div>
                        <h3>Contact Us</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <p> &copy; 2021-2022 Desh-Courier Ltd. All right reserved.</p>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    );
};

export default Footer;