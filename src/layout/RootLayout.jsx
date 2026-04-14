import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/sheared/Navbar';
import Footer from '../component/sheared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>

            <Outlet/>

            <Footer/>
        </div>
    );
};

export default RootLayout;