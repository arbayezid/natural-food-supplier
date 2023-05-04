import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';

const ChefList = () => {
    const cheflist = useLoaderData();

    return (
        <div className='container mx-auto row gap-5 mt-5'>
            {
              cheflist.map(chef => <ChefDetails key={chef.id} chef={chef}></ChefDetails>)
            }
        </div>
    );
};

export default ChefList;