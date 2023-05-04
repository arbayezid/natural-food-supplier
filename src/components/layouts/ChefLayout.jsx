import React from 'react';
import NavigationBar from '../shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default ChefLayout;