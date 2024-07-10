import React from 'react';

const Testimonial = () => {
    return (
        <div className=' bg-slate-100 mt-5'>
         <div className='flex justify-center  py-10 items-center'>
            {/* <div className='p-10'><img className='rounded-lg' src={img} alt="" /></div> */}
            <div className='p-10'>
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

export default Testimonial;