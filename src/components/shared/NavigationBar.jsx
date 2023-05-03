import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav className='fs-3 fw-bold font-bold'>Natural Food Supplier</Nav>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex gap-4 mx-auto" >
                            <Link className='text-decoration-none text-black' to='/'>Home</Link>
                            <Link className='text-decoration-none text-black' to='/login'>Login</Link>
                            <Link className='text-decoration-none text-black' to='/cheflist'>Our Chef</Link>
                            <Link className='text-decoration-none text-black' to='/blog'>Blog</Link>
                        </Nav>
                        {/* <p><FaUserCircle style={{ fontSize: '2rem', marginRight: '20px' }}></FaUserCircle></p> */}
                        {/* {user ? <Button onClick={handleLogout} variant="dark">Logout</Button> :
                            <Link to='/login'><Button variant="dark">Login</Button></Link>} */}
                        <button>user profile</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;