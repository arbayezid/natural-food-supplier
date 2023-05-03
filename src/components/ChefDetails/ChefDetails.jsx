import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefDetails = ({ chef }) => {
    const { id, chef_name, years_of_experience, number_of_recipes, chef_picture} = chef;
    return (
        <Card style={{ width: '18rem', fontSize: '20px', textAlign: 'center' }}>
            <Card.Img className='img-fluid' style={{height: '200px'}} variant="top" src={chef_picture}/>
            <Card.Body>
                <Card.Title>{chef_name}</Card.Title>
                <Card.Text>{years_of_experience} years experience</Card.Text>
                <Card.Text>{number_of_recipes} recipes</Card.Text>
                <Button className='w-100'  variant="primary">View Recipe</Button>
            </Card.Body>
        </Card>
    );
};

export default ChefDetails;