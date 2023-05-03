import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <Container className='mt-5 bg-secondary text-white p-3 rounded d-flex justify-content-evenly align-items-center gap-5'>
            <div className='d-flex gap-3'>
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
            </div>
            <div className='d-flex gap-3'>
                <Link className='text-decoration-none text-white' to='/about'>About Us</Link>
                <Link className='text-decoration-none text-white' to='/menu'>Our Menu</Link>
                <Link className='text-decoration-none text-white' to='/'>Location</Link>
            </div>
        </Container>
    );
};

export default Footer;