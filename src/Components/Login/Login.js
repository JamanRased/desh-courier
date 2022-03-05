import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
          <div className='bg-warning p-5 m-1' > 
                <h1>Login to Desh-Courier</h1>
                <form>
                    <input type="text" className="p-2 m-2 w-25"  required='*' placeholder='Enter Your Email' name='email' /><br/>
                    <input type="password" className="p-2 m-2 w-25" required='*' placeholder='Enter Your Password' name='password'/><br/>
                    <input type="submit" className="p-2 m-2 w-25" value="Login" />
                    <br/>
                    <NavLink
                        style={{ textDecoration: 'none'}}
                        to="/register">
                        <p className='mb-4 ps-2 text-bla' variant="text">New User? Please Register</p>
                    </NavLink>
                    
                </form>

                <button className="btn btn-success px-3 m-2 w-25">Google Sign In</button>
            </div>    
        </div>
    );
};

export default Login;