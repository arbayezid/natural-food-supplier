import React from 'react';
import aboutBanner from '../../assets/about-banner.jpg'

const About = () => {
    return (
        <div style={{marginTop: '200px'}} className='container d-lg-flex gap-5 align-items-center justify-content-center'>
            <div>
            <h2 className='fw-semibold'>About Us</h2>
            <p className='text-secondary'>Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and<br/> old recipes. We have only carefully sourced and seasonal ingredients in our disposal <br/>to make rustic dishes. We provide you with daily self-made bread, sourdough pizza,<br/> roasted fish-meat-vegetables and many more.</p>
            </div>

            <div>
                <img className='rounded' style={{height: '300px', width:'350px'}} src={aboutBanner} alt="" />
            </div>
        </div>
    );
};

export default About;