import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Help = () => {
    return (
        <div className='p-5 bg-light m-1'>
            <h1>Comming Soon......</h1>

            <Link to="/home"><Button>Back to Main</Button></Link>
            
        </div>
    );
};

export default Help;