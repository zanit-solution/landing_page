import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaDatabase } from 'react-icons/fa';
import { SiSidequest } from 'react-icons/si';
import { VscArrowSmallRight } from 'react-icons/vsc';

const OurService = () => {
    return (
        <div>
            <div className='py-10'><div className='grid justify-center'><p className='text-center text-lg text-red-400 border border-red-300 rounded-lg bg-green-200 font-semibold px-2'>Our Services</p></div>
                <h1 className='text-center  md:text-3xl sm:text-xl lg:text-5xl font-bold '>Comprehensive Plan</h1></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-5'>
                <div className='border p-4  rounded-lg bg-slate-100'>
                    <div className='grid justify-center p-2 '><CiDeliveryTruck className='w-16 h-16' /></div>
                    <h1 className='text-center  font-bold m-4 md:text-xl sm:text-lg lg:text-2xl'>Fuel Delivery</h1>
                    <p className='text-center'>Efficiently delivers diverse fuels (gasoline, diesel, propane, etc.) promptly to residential, commercial, or industrial sites.</p>
                    <div className='grid justify-center m-4'><button  className='flex justify-center gap-5' aria-label='area-lavel'><p className='text-center text-xl  font-bold'>Read more</p> <span><VscArrowSmallRight className='w-10 h-10' /></span> </button></div>
                </div>
                <div className='border p-4 rounded-lg bg-slate-100'>
                    <div className='grid justify-center p-2 '><FaDatabase className='w-16 h-16' /></div>
                    <h1 className='text-center font-bold m-4 md:text-xl sm:text-lg lg:text-2xl'>Fuel Storage Solutions</h1>
                    <p className='text-center'>Supplying secure fuel storage solutions with tanks or containers, ensuring adherence to safety standards and regulations.</p>
                    <div className='grid justify-center m-4'><button className='flex justify-center gap-5' aria-label='area-lavel'><p className='text-center text-xl  font-bold'>Read more</p> <span><VscArrowSmallRight className='w-10 h-10' /></span> </button></div>
                </div>
                <div className='border p-4  rounded-lg bg-slate-100'>
                    <div className='grid justify-center p-2 '><SiSidequest className='w-16 h-16' /></div>
                    <h1 className='text-center font-bold m-4 md:text-xl sm:text-lg lg:text-2xl'>Equipment Maintenanceegies</h1>
                    <p className='text-center'>Providing maintenance for fuel-related equipment like pumps, tanks, and generators to ensure safety compliance and functionality.</p>
                    <div className='grid justify-center m-4'><button className='flex justify-center gap-5' aria-label='area-lavel'><p className='text-center text-xl  font-bold'>Read more</p> <span><VscArrowSmallRight className='w-10 h-10' /></span> </button></div>
                </div>
            </div>
      
        </div>
    );
};

export default OurService;