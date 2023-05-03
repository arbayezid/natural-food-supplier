import React from 'react';
import NavigationBar from '../shared/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <h2>Footer
            </h2>
        </div>
    );
};

export default LoginLayout;