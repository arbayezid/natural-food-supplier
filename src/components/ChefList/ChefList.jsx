import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';

const ChefList = () => {
    // const [cheflist,setCheflist] = useState([]);
    const cheflist = useLoaderData();

    // useEffect(()=>{
    //     fetch('http://localhost:5000/cheflist')
    //     .then(res => res.json())
    //     .then(data => setCheflist(data))
    // },[])

   
    return (
        <div className='container mx-auto row gap-5 mt-5'>
            {
              cheflist.map(chef => <ChefDetails key={chef.id} chef={chef}></ChefDetails>)
            }
        </div>
    );
};

export default ChefList;