import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Resuse/Navbar/Navbar';
import Footer from '../Components/Resuse/Footer/Footer';

const Router = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Router;
