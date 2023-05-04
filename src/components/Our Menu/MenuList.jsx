import React from 'react';

const MenuList = () => {
    return (
        <div style={{ marginTop: '100px' }} className='container'>
            <h2 className='text-center mb-5'>Menu</h2>
            <div className=' d-lg-flex gap-5 justify-content-center fs-4'>

                <div>
                    <p className='fw-semibold'>Chicken Breast<span className='text-secondary  fw-light'>.........................</span><span className='text-warning fw-semibold'>$19.50</span></p>

                    <p className='fw-semibold'>Chicken Chap<span className='text-secondary  fw-light'>...........................</span><span className='text-warning fw-semibold'>$25.00</span></p>

                    <p className='fw-semibold'>Chicken Masala<span className='text-secondary  fw-light'>.......................</span><span className='text-warning fw-semibold'>$25.50</span></p>

                    <p className='fw-semibold'>Grilled Chicken<span className='text-secondary  fw-light'>........................</span><span className='text-warning fw-semibold'>$25.49</span></p>

                    <p className='fw-semibold'>Chicken Lolipop<span className='text-secondary  fw-light'>......................</span><span className='text-warning fw-semibold'>$25.00</span></p>
                </div>

                <div>
                    <p className='fw-semibold'>Chicken Tikka<span className='text-secondary  fw-light'>.........................</span><span className='text-warning fw-semibold'>$19.50</span></p>

                    <p className='fw-semibold'>Chicken Wings<span className='text-secondary  fw-light'>.......................</span><span className='text-warning fw-semibold'>$25.00</span></p>

                    <p className='fw-semibold'>Chicken Fry<span className='text-secondary  fw-light'>.............................</span><span className='text-warning fw-semibold'>$25.50</span></p>

                    <p className='fw-semibold'>Chicken Noodles<span className='text-secondary  fw-light'>..................</span><span className='text-warning fw-semibold'>$25.49</span></p>
                    
                    <p className='fw-semibold'>Chicken Sharma<span className='text-secondary  fw-light'>....................</span><span className='text-warning fw-semibold'>$25.00</span></p>
                </div>

            </div>
        </div>
    );
};

export default MenuList;