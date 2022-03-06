import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError,signInWithGoogle } = useFirebase();

    //Current Sate 
    const location = useLocation();

    //Handle Email Passwaord Change 
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //Submit Login Button
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location);
        e.preventDefault();
    }
    //GoogleSign
    const handleGoogleSignIn = () => {
        signInWithGoogle(location)
    }
    return (
        <div>
          <div className='bg-warning p-5 m-1' > 
                <h1>Login to Desh-Courier</h1>
                <form onSubmit= {handleLoginSubmit}>
                    <input type="text" onChange={handleOnChange} className="p-2 m-2 w-25"  required='*' placeholder='Enter Your Email' name='email' /><br/>
                    <input type="password" onChange={handleOnChange} className="p-2 m-2 w-25" required='*' placeholder='Enter Your Password' name='password'/><br/>
                    <input type="submit" className="p-2 m-2 w-25" value="Login" />
                    <br/>
                    <NavLink
                        style={{ textDecoration: 'none'}}
                        to="/register">
                        <p className='mb-4 ps-2 text-bla' variant="text">New User? Please Register</p>
                    </NavLink>
                    {isLoading && <Spinner />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>

                <Button onClick={handleGoogleSignIn} className="btn btn-success">Google Sign In</Button>
            </div>    
        </div>
    );
};

export default Login;