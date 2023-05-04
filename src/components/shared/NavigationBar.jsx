import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav className='fs-3 fw-bold font-bold'>Natural Food Supplier</Nav>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex gap-4 mx-auto fw-semibold" >
                            <li>
                                <NavLink to='/' className={({ isActive }) => isActive ? 'text-danger' : 'text-decoration-none'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/cheflist' className={({ isActive }) => isActive ? 'text-danger' : 'text-decoration-none'}>Our Chef</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-danger ' : 'text-decoration-none'}>Blog</NavLink>
                            </li>
                        </Nav>
                        {/* <p><FaUserCircle style={{ fontSize: '2rem', marginRight: '20px' }}></FaUserCircle></p> */}
                        
                        {user ? <div className='d-flex gap-2 align-items-center'>
                            <span className='fw-semibold'>{user?.displayName}</span>
                            {/* <span className='fw-semibold'>{user?.photoURL}</span> */}
                            <Button onClick={handleLogout} variant="dark">Logout</Button>
                        </div> :
                            <Link to='/login'><Button variant="dark">Login</Button></Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;