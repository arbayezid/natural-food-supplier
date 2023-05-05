import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';
import { Spinner } from 'react-bootstrap';

const ChefList = () => {
    const [loading,setLoading] = useState(true);
    const cheflist = useLoaderData();
    
    useEffect(()=>{
        setLoading(false)
    },[])
    

    return (
        <div className='container mx-auto row gap-5 mt-5'>
           
            {
               
              loading ? <Spinner animation="border" variant="primary" /> : cheflist.map(chef => <ChefDetails key={chef.id} chef={chef}></ChefDetails>)
            }
        </div>
    );
};

export default ChefList;