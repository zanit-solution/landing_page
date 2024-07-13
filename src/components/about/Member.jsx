import Image from 'next/image';
import React from 'react';

const Member = ({ item, index }) => {
    const { name, title, img, description } = item
    return (
        <div>
            {
                index % 2 === 0 ?
                    <div className='flex flex-col md:flex-row justify-around gap-10 items-center'>
                        <div>
                            <Image height={5000} width={500} src={img} className='max-w-[300px] max-h-[350px] rounded-lg shadow-xl' alt='loading'/> 
                        </div>
                        <div className='text-center md:text-left'>
                            <h1 className='text-5xl text-orange-600 font-bold'>{title}</h1>
                            <h3 className='text-xl py-2 font-bold'>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col sm:flex-row-reverse  md:flex-row justify-around gap-10 items-center'>
                        <div className='text-center md:text-left'>
                            <h1 className='text-5xl text-orange-600 font-bold'>{title}</h1>
                            <h3 className='text-xl py-2 font-bold'>{name}</h3>
                            <p>{description}</p>
                        </div>
                        <div>
                            <Image height={5000} width={500} src={img} className='max-w-[300px] max-h-[350px] rounded-lg shadow-xl' alt='loading'/> 
                        </div>
                    </div>
            }
        </div>



    );
};

export default Member;