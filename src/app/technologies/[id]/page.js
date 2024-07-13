
"use client"
import Image from 'next/image';
import {   useSearchParams } from 'next/navigation';
import React from 'react';

const TechnologyDetail = () => {

    const router = useSearchParams()
    console.log(router.get("search"))
    const data = JSON.parse(router.get("search"))
    console.log(data?.image)
    return (
        <div className={data?.color}>
            <div className='container mx-auto py-32 flex flex-row justify-center gap-10 items-center'>
                <div>
                    <h1 className='text-5xl font-bold'>{data.name}</h1>
                    <p className='text-xl py-10'>{data.description}</p>
                </div>
                <div><Image height={1000} width={1000} src={data?.image} alt="" /></div>

            </div>
        </div>
    );
};

export default TechnologyDetail;