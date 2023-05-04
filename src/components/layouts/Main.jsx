import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuList from '../Our Menu/MenuList';
import About from '../About Us/About';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <MenuList></MenuList>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Main;