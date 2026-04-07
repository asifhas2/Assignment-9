import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col p-10 justify-center items-center'>
           <div>
             <img src="https://www.shutterstock.com/image-vector/person-stands-near-large-404-260nw-2671864315.jpg" alt="" />
           </div>
            
            <Link className='btn btn-primary' to='/'>Go To Home!</Link>
        </div>
        
    );
};

export default ErrorPage;