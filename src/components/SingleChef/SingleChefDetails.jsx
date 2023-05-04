import React from 'react';
import {  Card } from 'react-bootstrap';
import {  FaRegHeart,  FaThumbsUp } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const SingleChefDetails = () => {
    const [isDisabled,setIsDisabled] = React.useState(false)
    const { id } = useParams()
    const singleChef = useLoaderData();
    const { chef_name, years_of_experience, number_of_recipes, chef_picture, recipes, likes } = singleChef;


    const handledisable = (event) =>{
        toast('The recipe added your favourite list')
        
    }
    return (
        <div className='d-lg-flex container mt-5 gap-3 border p-2 rounded'>
            <div style={{  fontSize: '20px', textAlign: 'center' }}>
                <Card.Img className=' rounded' style={{ height: '300px',width: '400px' }} variant="top" src={chef_picture} />
                <Card.Body className='mt-3'>
                    <Card.Title>Name: {chef_name}</Card.Title>
                    <Card.Text>We offer you perfect cooking, best served dishes with fresh ingredients and old recipes.</Card.Text>
                    <Card.Text>Experience: {years_of_experience} years experience.</Card.Text>
                    <Card.Text>Recipes: {number_of_recipes} recipes.</Card.Text>

                </Card.Body>
            </div>

            <div>
                <div className='mb-5'>
                    <span className='fw-bold'>Recipe Name:</span> {recipes[0].recipe_name} <span onClick={handledisable}
                    className='d-flex justify-content-end me-3'><FaRegHeart></FaRegHeart>
                    </span>
                    <span className='fw-bold'>Recipe Name:</span> {recipes[0].recipe_name} 
                    
                    {/* <span className='d-flex justify-content-end me-3'><FaHeart></FaHeart></span> */}
                    
                    <span className='fw-bold'>Ingredients:</span> {recipes[0].ingredients}<br />
                    <span className='fw-bold'>Cooking Method:</span> {recipes[0].cooking_method}<br />
                    <span className='fw-bold'>Ratings:</span> {recipes[0].ratings} 
                    <span className='d-flex align-items-center gap-2'><FaThumbsUp /> {likes}</span>

                </div>
                <div className='mb-5'>
                    <span className='fw-bold'>Recipe Name:</span> {recipes[1].recipe_name}<br /><br />
                    <span className='fw-bold'>Ingredients:</span> {recipes[1].ingredients}<br />
                    <span className='fw-bold'>Cooking Method:</span> {recipes[1].cooking_method}<br />
                    <span className='fw-bold'>Ratings:</span> {recipes[1].ratings} 
                    <span className='d-flex align-items-center gap-2'><FaThumbsUp /> {likes}</span>
                </div>
                <div className='mb-5'>
                    <span className='fw-bold'>Recipe Name:</span> {recipes[2].recipe_name}<br /><br />
                    <span className='fw-bold'>Ingredients:</span> {recipes[2].ingredients}<br />
                    <span className='fw-bold'>Cooking Method:</span> {recipes[2].cooking_method}<br />
                    <span className='fw-bold'>Ratings:</span> {recipes[2].ratings} 
                    <span className='d-flex align-items-center gap-2'><FaThumbsUp /> {likes}</span>
                </div>

            </div>

        </div>
    );
};

export default SingleChefDetails;