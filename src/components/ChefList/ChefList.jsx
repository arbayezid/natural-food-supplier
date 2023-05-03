import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';

const ChefList = () => {
    const [cheflist,setCheflist] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/cheflist')
        .then(res => res.json())
        .then(data => setCheflist(data))
    },[])

    console.log(cheflist)
    return (
        <div className='container mx-auto row gap-5 mt-5'>
            {
              cheflist.map(chef => <ChefDetails key={chef.id} chef={chef}></ChefDetails>)
            }
        </div>
    );
};

export default ChefList;