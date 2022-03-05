import React from 'react';
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const Plan = () => {
    return (
        <div >
            <Container>
                <h1 className='pb-3'>Our Package</h1>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', backgroundColor:'#fff4f4' }}>
                            <Card.Body>
                                <Card.Title>Standard</Card.Title>
                                <Card.Text>
                                H x W x L : 1 x 1 x 1 ft. Weight: Upto 1 KG
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Destination: Local</ListGroupItem>
                                <ListGroupItem>Delivery Option: Regular</ListGroupItem>
                                <ListGroupItem>Additional KG: 30 KG</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button>50 Tk</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', backgroundColor:'#fff4f4' }}>
                            <Card.Body>
                                <Card.Title>Standard</Card.Title>
                                <Card.Text>
                                H x W x L : 1 x 1 x 1 ft. Weight: Upto 1 KG
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Destination: InterDistrict</ListGroupItem>
                                <ListGroupItem>Delivery Option: Regular</ListGroupItem>
                                <ListGroupItem>Additional KG: 30 KG</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button>90 Tk</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', backgroundColor:'#fff4f4' }}>
                            <Card.Body>
                                <Card.Title>Standard</Card.Title>
                                <Card.Text>
                                H x W x L : 1 x 1 x 1 ft. Weight: Upto 1 KG
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Destination: InterDivision</ListGroupItem>
                                <ListGroupItem>Delivery Option: Regular</ListGroupItem>
                                <ListGroupItem>Additional KG: 30 KG</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button>130 Tk</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Plan;