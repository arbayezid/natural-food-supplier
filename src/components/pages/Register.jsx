import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const [accepted,setAccepted] = useState(false);
    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,photo,password)
        createUser (email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error =>{
            console.log(error.message)
        })

    }

    const handleAccepted = (event) =>{
        setAccepted(event.target.checked)
    }

    return (
        <Container>
            <Form onSubmit={handleRegister} className='w-25 mx-auto'>
            <h2>Please Register</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="photo url" required/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Form.Group onClick={handleAccepted} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={<>Accept <Link to='/terms'>Terms & Condition</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <br/>
                <Form.Text className="text-secondary">
                    Already have an account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    
                </Form.Text>
                <Form.Text className="text-danger">
                   
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;