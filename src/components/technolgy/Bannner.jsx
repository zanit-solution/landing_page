import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <div className=''>
                <div>
                    <Image height={1000} width={1000} src={"/image/technology.jpg"} className='w-full' />
                </div>

            </div>
            {/* <div className='absolute'>
                <h1 className='text-9xl font-bold '>Technology</h1>
            </div> */}
        </div>
    );
};

export default Banner;