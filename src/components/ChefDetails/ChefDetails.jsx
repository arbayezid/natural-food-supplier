import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefDetails = ({ chef }) => {
    const { id, chef_name, years_of_experience, number_of_recipes, chef_picture, likes } = chef;
    return (
        <Card style={{ width: '18rem', fontSize: '20px', textAlign: 'center' }}>

            {/* Lazy Lood */}
            <LazyLoad height={200} width={250} threshold={0.95}>
            <Card.Img className='img-fluid' style={{ height: '200px' }} variant="top" src={chef_picture} />
            </LazyLoad>
            
            <Card.Body>
                <Card.Title><span className='fw-bold'>Name:</span> {chef_name}</Card.Title>
                <Card.Text><span className='fw-bold'>Experience:</span> {years_of_experience} years experience</Card.Text>
                <Card.Text><span className='fw-bold'>Recipes:</span> {number_of_recipes} recipes</Card.Text>
                <Card.Text className='d-flex align-items-center justify-content-center gap-2'><FaThumbsUp/> {likes}</Card.Text>
                <Link className='text-white text-decoration-none' to={`/cheflist/${id}`}><Button className='w-100' variant="primary">View Recipe</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default ChefDetails;