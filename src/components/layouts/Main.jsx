import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar';
import Banner from '../Banner/Banner';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;