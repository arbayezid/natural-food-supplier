import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleChefDetails = () => {
    const { id } = useParams()
    const singleChef = useLoaderData();
    const { chef_name, years_of_experience, number_of_recipes, chef_picture, recipes } = singleChef;
    return (
        <div className='d-flex container mt-5 gap-3'>
            <Card style={{ width: '48rem', fontSize: '20px', textAlign: 'center' }}>
                <Card.Img className='img-fluid' style={{ height: '300px' }} variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>Name: {chef_name}</Card.Title>
                    <Card.Text>Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and old recipes</Card.Text>
                    <Card.Text>Experience: {years_of_experience} years experience</Card.Text>
                    <Card.Text>Recipes: {number_of_recipes} recipes</Card.Text>

                </Card.Body>
            </Card>
            {/* {
                 recipes.map(recipe => <div>
                   Recipe Name: {recipe.recipe_name}
                 </div>)
                } */}
            <div>
                <div className='mb-5'>
                    <span className='fw-bold'>Recipe Name:</span> {recipes[0].recipe_name}<br /><br />
                    <span className='fw-bold'>Ingredients:</span> {recipes[0].ingredients}<br />
                    <span className='fw-bold'>Cooking Method:</span> {recipes[0].cooking_method}<br />
                    <span className='fw-bold'>Ratings:</span> {recipes[0].ratings}

                </div>
                <div className='mb-5'>
                    <span className='fw-bold'>Recipe Name:</span> {recipes[1].recipe_name}<br /><br />
                    <span className='fw-bold'>Ingredients:</span> {recipes[1].ingredients}<br />
                    <span className='fw-bold'>Cooking Method:</span> {recipes[1].cooking_method}<br />
                    <span className='fw-bold'>Ratings:</span> {recipes[1].ratings}
                </div>
                <div className='mb-5'>
                    <span className='fw-bold'>Recipe Name:</span> {recipes[2].recipe_name}<br /><br />
                    <span className='fw-bold'>Ingredients:</span> {recipes[2].ingredients}<br />
                    <span className='fw-bold'>Cooking Method:</span> {recipes[2].cooking_method}<br />
                    <span className='fw-bold'>Ratings:</span> {recipes[2].ratings}
                </div>

            </div>

        </div>
    );
};

export default SingleChefDetails;