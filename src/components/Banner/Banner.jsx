import React from 'react';
import banner from '../../assets/chef-banner.jpg'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Container className='d-lg-flex align-items-center justify-content-center gap-5 mt-5'>
            <div>
                <h2 className='fs-3 fw-bold'>Natural Food Supplier</h2>
                <p className='text-secondary'>Our Chefs offer you perfect cooking,<br/> best served dishes with fresh ingredients<br/> and old recipes.</p>
                <Link to='/cheflist'><button className='bg-danger text-white fw-bold border-0 px-3 py-2 rounded'>See Our Chef</button></Link>
            </div>

            <div>
                <img style={{width: '400px'}} src={banner} alt="" />
            </div>
        </Container>
    );
};

export default Banner;