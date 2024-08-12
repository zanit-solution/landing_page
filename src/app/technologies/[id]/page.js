"use client"
import React from 'react';
import Image from 'next/image';
import {   useSearchParams } from 'next/navigation';

const TechnologyDetail = () => {

    const router = useSearchParams()
    console.log(router)
    const searchParam = router.get("search");
    console.log(searchParam, '------------------>')
    const data = JSON.parse(searchParam)
    console.log(data)
    const colorSeq = ['bg-[#61DBFB]', 'bg-[#68A063]', 'bg-[#ff0000]', 'bg-[#3fa037]', 'bg-[#303030]', 'bg-[#007ACC]']
    return (
        <div className={`${colorSeq[parseInt(data?.id)
            - 1]} pt-52`}>
            <div className='container mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-2 justify-around gap-10 items-center'>
                <div>
                    <h1 className='text-5xl px-5 font-bold'>{data?.name}</h1>
                    <p className='text-xl py-10 px-5'>{data?.description}</p>
                </div>
                <div><img className='w-sm h-sm' height={1000} width={1000} src={data?.image} alt="" /></div>

            </div>
        </div>
    );
};

export default TechnologyDetail;