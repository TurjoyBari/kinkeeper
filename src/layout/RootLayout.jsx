import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/sheared/Navbar';
import Footer from '../component/sheared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>

            <Outlet/>

            <Footer/>


            <ToastContainer/>
        </div>
    );
};

export default RootLayout;