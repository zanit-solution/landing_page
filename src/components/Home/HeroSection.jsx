import Image from 'next/image';
import React from 'react';
import { FaBell } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className='md:pt-[72px] pt-[54px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center  bg-[#FEF6F3]  md:p-5 p-3 items-center'>
                <div className=''>
                    <div className='grid justify-start'>
                        <p className=' border rounded-full flex items-center pe-3   border-red-200 relative '><span className='p-1   bg-green-300 left-0 me-2 rounded-full  '><FaBell ></FaBell></span>   Business</p>
                    </div>
                    <h1 className='md:text-4xl xs:text-xl sm:text-2xl my-5 text-start font-bold'>Transform Your Business with Cutting-Edge   Tech Solutions</h1>
                    <p className='text-start'>Our solution empowers businesses with cutting-edge technology that enhances efficiency and scalability. Through innovative software and expert insights, we streamline operations, optimize performance, and drive growth. <br /> Experience tailored solutions designed to meet your unique business needs, ensuring success in a rapidly evolving digital landscape.</p>
                    <div className='grid justify-start'>
                        <button className=' my-10 ml-0 font-semibold rounded-lg bg-orange-600 text-white px-5 py-2' aria-label='btn-area' >Get Started now</button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Image width={500} height={500} src={"/image/hero-img.png"} alt="loading" />
                </div>
            </div>
        </section>

    );
};

export default HeroSection;