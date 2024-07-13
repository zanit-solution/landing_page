import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaAndroid, FaApple, FaDatabase } from 'react-icons/fa';
import { SiSidequest } from 'react-icons/si';
import { VscArrowSmallRight } from 'react-icons/vsc';

const OurService = () => {
    return (
        <div>
            <div className='py-10'><div className='grid justify-center'><p className='text-center text-lg text-red-400 border border-red-300 rounded-lg bg-green-200 font-semibold px-2'>Our Services</p></div>
                <h1 className='text-center  md:text-3xl sm:text-xl lg:text-5xl font-bold '>Comprehensive Plan</h1></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-5'>
                <div className='border p-4  rounded-lg bg-slate-100'>
                    <div className='grid justify-center p-2 '><FaApple  className='w-16 h-16' /></div>
                    <h1 className='text-center  font-bold m-4 md:text-xl sm:text-lg lg:text-2xl'>iOS App Development</h1>
                    <p className='text-center'>We specialize in creating tailored ios app and web applications that meet your unique business needs.</p>
                    <div className='grid justify-center m-4'><button className='flex justify-center gap-5' aria-label='area-lavel'><p className='text-center text-xl  font-bold'>Read more</p> <span><VscArrowSmallRight className='w-10 h-10' /></span> </button></div>
                </div>
                <div className='border p-4 rounded-lg bg-slate-100'>
                    <div className='grid justify-center p-2 '><FaAndroid className='w-16 h-16' /></div>
                    <h1 className='text-center font-bold m-4 md:text-xl sm:text-lg lg:text-2xl'>Android App Development</h1>
                    <p className='text-center'>Harnessing the power of Android, we design and develop intuitive mobile applications to enhance your digital presence.</p>
                    <div className='grid justify-center m-4'><button className='flex justify-center gap-5' aria-label='area-lavel'><p className='text-center text-xl  font-bold'>Read more</p> <span><VscArrowSmallRight className='w-10 h-10' /></span> </button></div>
                </div>
                <div className='border p-4  rounded-lg bg-slate-100'>
                    <div className='grid justify-center p-2 '><SiSidequest className='w-16 h-16' /></div>
                    <h1 className='text-center font-bold m-4 md:text-xl sm:text-lg lg:text-2xl'>E-commerce Site Development</h1>
                    <p className='text-center'>From custom storefronts to seamless shopping experiences, we build e-commerce solutions that drive sales and engage customers effectively</p>
                    <div className='grid justify-center m-4'><button className='flex justify-center gap-5' aria-label='area-lavel'><p className='text-center text-xl  font-bold'>Read more</p> <span><VscArrowSmallRight className='w-10 h-10' /></span> </button></div>
                </div>
            </div>

        </div>
    );
};

export default OurService;