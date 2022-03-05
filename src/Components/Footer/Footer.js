import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-4 m-1'>
            <Container >
                <Row>
                    <Col xs={4}>
                        <ul className='our-service'>
                        <h3>Our Services</h3>
                            <li>Food Delivery </li>
                            <li>Bike Ride </li>
                            <li>Parcel Delivery </li>
                            <li>Documents Delivery </li>
                        </ul>
                    </Col>
                    <Col xs={4}>
                        <div>
                        <ul className='our-service'>
                        <h3>Quick Links</h3>
                            <li>Home </li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Become a Merchant</li>
                        </ul>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div>
                        
                        <ul className='our-service'>
                        <h3>Contact Us</h3>
                            <li>desh-courier@gmail.com</li>
                            <li>Uttara, Dhaka, Bangladesh</li>
                            <li>Help- 1xxxxxxxx1</li>
                            <li>(Available : 10:00am to 07:00pm)</li>
                        </ul>
                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="pt-4">
                        <p> &copy; 2021-2022 Desh-Courier Ltd. All right reserved.</p>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    );
};

export default Footer;