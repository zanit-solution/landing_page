import Image from 'next/image';
import React from 'react';

const Transformation = () => {
    return (
        <div className=' bg-slate-100 mt-5'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 justify-center sm:gap-3 md:gap-4 lg:gap-5 py-10 items-center'>
                <div className='py-10'><Image className='rounded-lg sm:w-full sm:w-[300px]' src={"/image/team.jpg"} width={1000} height={1000} />
                </div>
                <div className='py-10'>
                    <div className='bg-white p-10 rounded-lg'><h1 className='text-3xl font-medium'>Transforming Challenges into Profit</h1>
                        <p className='py-5'>Intuition and strategy form the foundation of our research methodology, which we apply to both traditional and digital media.</p>
                        <p>We firmly believe that the human element is vital in initiating any successful project, as it is here that meaningful emotional connections between the company and individuals are cultivated.</p>
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