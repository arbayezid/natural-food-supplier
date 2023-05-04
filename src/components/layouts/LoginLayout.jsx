import React from 'react';
import NavigationBar from '../shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import ChefList from '../ChefList/ChefList';
import ChefDetails from '../ChefDetails/ChefDetails';
import About from '../About Us/About';
import MenuList from '../Our Menu/MenuList';


const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;