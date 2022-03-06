import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Menu = () => {
    const {user, logOut} = useFirebase()
    return (
        <div className='m-1'>
            <Container>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Desh- <strong>Courier</strong> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0" variant="pills" defaultActiveKey="/home"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <div className="d-flex">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/help">Help</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                                    
                    </div>
                    {user?.email ?
                    <Nav>
                      <Nav.Link as={Link} to="/adminDashboard">Admin</Nav.Link>
                      <Button onClick={logOut} variant="light">Logout</Button> 
                    </Nav>
                    :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        Sign in : <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </Container>
        </div>
    );
};

export default Menu;