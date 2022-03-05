
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service }) => {
    const {id, name, image } = service;

    return (
        <Row>
            <Col className='d-flex' id='servicess'  >
                <div>
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                </div>
                <div>
                    <Link to={`/booking/${id}`}>
                        <Button className="btn border bg-black text-white">Book Now</Button>
                     </Link>
                </div>
            </Col>
        </Row>
    );
};

export default Service;