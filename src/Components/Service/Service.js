
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Service.css';

const Service = ({service }) => {
    const { name, image } = service;

    return (
        <Row>
            <Col className='d-flex' id='servicess'  >
                <div>
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                </div>
                <div>
                    <Button>Book Now</Button>
                </div>
            </Col>
        </Row>
    );
};

export default Service;