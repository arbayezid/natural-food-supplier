import React from 'react';
import banner from '../../assets/chef-banner.jpg'
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className='d-flex align-items-center justify-content-center gap-5 mt-5'>
            <div>
                <h2 className='fs-3 fw-bold'>Natural Food Supplier</h2>
                <p className='text-secondary'>Our Chefs offer you perfect cooking,<br/> best served dishes with fresh ingredients<br/> and old recipes.</p>
                <button className='bg-gray border-0 px-3 py-2 rounded'>Learn More</button>
            </div>

            <div>
                <img src={banner} alt="" />
            </div>
        </Container>
    );
};

export default Banner;