import React from 'react';
import Navber from '../Compotents/Navber';
import { Outlet } from 'react-router';
import Footer from '../Compotents/Footer';
import Slider from '../Compotents/Slider';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;