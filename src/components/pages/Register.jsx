import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';



const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/'

    // email password register
    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        

        if(password.length < 6){
        return setError('password must be 6 character')
        }
        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            setError('')
            console.log(createdUser)
            navigate(from)
            updateUserInfo(createdUser, name, photo)
        })
        .catch(error =>{
            console.log(error.message)
        })
        console.log(name,email,photo,password)

    }

    // Update user profile
    const updateUserInfo = (user,name) =>{
        updateProfile(user,{
            displayName: name
        })
        .then()
        .catch(error=>{
            console.log(error.message)
        })
    }
    
    return (
        <Container>
            <Form onSubmit={handleRegister} className='w-25 mx-auto'>
                <h2>Please Register</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Your photo url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already have an account?<Link to='/login'>Login</Link><br/>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;