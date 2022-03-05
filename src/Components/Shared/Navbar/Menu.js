import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <div className='m-1'>
            <Navbar collapseOnSelect expand="lg">
                <Container className="p-2 m-auto">
                    <Navbar.Brand href="#home">Desh-Courier</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mb-2">
                    
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link href="#deets">Services</Nav.Link>
                        <Nav.Link href="#deets">Help</Nav.Link>
                        <Nav.Link href="#deets">Blog</Nav.Link>
                        <Nav.Link href="#deets">Contact Us</Nav.Link>
                        <div className='pb-2 mb-1'>
                            
                            <Nav.Link href="/login"><Button variant="primary">Login</Button></Nav.Link>
                        </div>
                       
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;