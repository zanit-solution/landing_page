import Image from 'next/image';
import React from 'react';

const Transformation = () => {
    return (
        <div className=' bg-slate-100 mt-5'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 justify-center sm:gap-3 md:gap-4 lg:gap-5 py-10 items-center'>
                <div className='py-10'><img className='rounded-lg sm:w-full' src={"/image/team.jpg"} width={1000} height={1000} alt='loading' />
                </div>
                <div className='py-12 px-2'>
                    <div className='bg-white p-10 rounded-lg'><h1 className='text-3xl font-medium'>Driving Success Through Insightful Strategies</h1>
                        <p className='py-5'>At Zan It solution, we leverage intuition and strategic research methodologies across traditional and digital media. <br />

                            We believe in the power of human connection to drive successful projects. By fostering meaningful emotional bonds, we cultivate lasting relationships between businesses and individuals.</p>
                    </div>
                    <div className='p-10 flex gap-10'>
                        <div>
                            <h1 className='text-5xl font-bold'>200+</h1>
                            <p>Clients served</p>
                        </div>
                        <div>
                            <h1 className='text-5xl font-bold'>95%</h1>
                            <p>Growth rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transformation;