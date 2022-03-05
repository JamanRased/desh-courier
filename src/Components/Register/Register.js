import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-warning p-5 m-1' >
            <Container >
            <h2> Register Now </h2>
            <div className='p-2 m-3'>
                <form>
                    <input className="input-field" type="name"placeholder="Enter Your Store Name" name='name' />
                    <br />
                    <input className="input-field" type="Email"placeholder="Enter Your Email" name='email' />
                    <br />
                    <input className="input-field" type="password"placeholder="Enter New Passwoard" name='password'/>
                    <br />
                    <input className="input-field" type="password"placeholder="Retype Your Passwoard" name='password2'/>
                    <br />
                    <Button type="submit" className="pt-2 m-2">Register Now</Button>
                    <br/>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/login">
                        <Button variant="text">Already Register? Please Login</Button>
                    </NavLink>
                </form>
                </div>
            </Container> 
        </div>
    );
};

export default Register;