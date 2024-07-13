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
                    <h1 className='text-5xl xs:text-xl sm:text-2xl my-5 text-start font-bold'>Empowering startups to fuel <br /> their business growth</h1>
                    <p className='text-start'>Eu posuere mi sed purus proin quisque molestie. Ut amet,  at amet,<br /> velit <br />

                        nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
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