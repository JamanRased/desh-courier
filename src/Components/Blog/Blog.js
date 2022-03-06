import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='p-5 bg-warning m-1'>
            <div>
            <h1>Comming Soon Our Recent Blog......</h1>
            
            <Link to="/home"><Button>Back to Main</Button></Link>
            
        </div>
        </div>
    );
};

export default Blog;