import React, { useState } from 'react';
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Register = () => {
    
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useFirebase();

    //email pass handeler
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //regiter submit
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        e.preventDefault();
    }
    return (
        <div className='bg-warning p-5 m-1' >
            <Container >
            <h2> Register Now </h2>
            <div className='p-2 m-3'>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <input className="input-field" onChange={handleOnBlur} type="name"placeholder="Enter Your Store Name" name='name' />
                    <br />
                    <input className="input-field" onChange={handleOnBlur} type="Email"placeholder="Enter Your Email" name='email' />
                    <br />
                    <input className="input-field" onChange={handleOnBlur} type="password"placeholder="Enter New Passwoard" name='password'/>
                    <br />
                    <input className="input-field" onChange={handleOnBlur} type="password"placeholder="Retype Your Passwoard" name='password2'/>
                    <br />
                    <Button type="submit" className="pt-2 m-2">Register Now</Button>
                    <br/>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/login">
                        <Button variant="text">Already Register? Please Login</Button>
                    </NavLink>
                </form>}
                 {isLoading && <Spinner />}
                 {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                 {authError && <Alert severity="error">{authError}</Alert>}
                </div>
            </Container> 
        </div>
    );
};

export default Register;