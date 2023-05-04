import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error,setError] = useState('');
    const {signInUser, googleSignIn, githubSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location?.state?.from?.pathname || '/'

    // Email Password Signin
    const handleSignIn = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signInUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            navigate(from)
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })
    }

    // Google Signin
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            const createdUser = result.user;
            navigate(from)
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })
    }

// Github Signin
    const handleGithub = () =>{
        githubSignIn()
        .then(result =>{
            const createdUser = result.user
            navigate(from)
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })
    }


    return (
        <Container>
            <Form onSubmit={handleSignIn} className='w-25 mx-auto'>
            <h2>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br/>
                <Form.Text className="text-secondary">
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text><br/><br/>

                <Form.Text className="text-secondary border px-3 py-2 rounded">
                    <Link onClick={handleGoogle} className='text-decoration-none'><FaGoogle></FaGoogle> SignIn With Google</Link>
                </Form.Text><br/><br/>

                <Form.Text className=" border px-3 py-2 rounded">
                    <Link onClick={handleGithub} className='text-decoration-none text-black'><FaGithub></FaGithub> SignIn With Github</Link>
                </Form.Text><br/><br/>
                <Form.Text className="text-success">
                    
                </Form.Text>
                <Form.Text className="text-danger">
                   {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;