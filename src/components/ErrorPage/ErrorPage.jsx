import React from 'react';
import { Link } from 'react-router-dom';
import errorLogo from '../../assets/error404.jpg'

const ErrorPage = () => {
    return (
        <div>
            <section className='text-center mt-5'>
                <div className='container px-5 mx-auto my-8'>
                    <img style={{ height: '200px' }} src={errorLogo} alt="" />
                    <div className='max-w-md text-center'>
                        <h2 className='mb-8'>
                            <span>Error</span> 404
                        </h2>
                        <p>
                            Error
                        </p>
                        <Link
                            to='/'
                            className='px-8 py-3 rounded ' >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;