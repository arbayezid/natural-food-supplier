import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar';
import Banner from '../Banner/Banner';
import ChefList from '../ChefList/ChefList';
import ChefDetails from '../ChefDetails/ChefDetails';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <ChefDetails></ChefDetails>
        </div>
    );
};

export default Main;