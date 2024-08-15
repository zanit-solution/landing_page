import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { data } from './data';


const Technolgys = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3  container mx-auto justify-center items-center gap-10 py-10'>
            {
                data.map(item => <>
                    <Link href={`/technologies/${item.id}?search=${JSON.stringify(item)}`} key={item.id}>
                        <div className='hover:shadow-2xl h-full hover:rounded-xl group overflow-hidden'>
                            <div className=''>
                                <img height={1000} width={1000} src={item.image} alt={item.name} className='p-2 h-96 group-hover:scale-110 duration-500 transform ease-in-out' />
                            </div>
                            <div className='p-5'>
                                <h1 className='text-2xl font-bold'>{item.name}</h1>
                                <p>{item.description.length > 100 ? item.description.slice(0, 150) + "......" : item.description}</p>
                            </div>
                        </div>
                    </Link></>)
            }
        </div>
    );
};

export default Technolgys;