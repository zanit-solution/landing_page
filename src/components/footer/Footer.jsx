import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { LuTwitter } from 'react-icons/lu';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className= 'container mx-auto  py-28 grid sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4  gap-5'>
            <div className='grid'>
                {/*   <img className='w-44' src={logo} alt="" /> */}
                <Image className=' w-32 h-16' width={1000} height={1000} src={"/image/logo.png"}   />
                <p>Integer auctor aliquet martor, sed lorem malesuada eros blandit eget. Proin lacinia mortoc id odio vestibulum.</p>
                <div className='relative items-center flex'> <input className='border p-3 rounded-lg bg-slate-100 sm:max-w-sm w-full' type="text" placeholder='Enter your Email' /> <button className='absolute right-1 py-2 px-4 rounded-lg bg-green-300'> <FaArrowRightLong></FaArrowRightLong> </button> </div>

            </div>
            <div className='grid gap-2'>
                <h1 className='text-xl font-bold'>Company</h1>
                <p>about</p>
                <p>Service</p>
                <p>Portfolio</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <div className=''>
                <h1 className='font-bold text-xl'>Social Media</h1>
                <div className='flex items-center'><span className=''><FaFacebookF className='border w-10 p-2 h-10  me-1 rounded-lg' /></span><p className='py-4'>Facebook</p></div>
                <div className='flex items-center'><span className=''><FaInstagram className='border w-10 p-2 h-10 me-1 rounded-lg' /></span><p className='py-4'>Instagram</p></div>
                <div className='flex items-center'><span className=''><LuTwitter className='border w-10 p-2 h-10   me-1 rounded-lg' /></span><p className='py-4'>Twitter</p></div>
                <div className='flex items-center'><span className=''><SlSocialLinkedin className='border w-10 p-2 me-1 h-10 rounded-lg' /></span><p className='py-4'>LinkedIn</p></div>

            </div>
            <div className=''>
                <h1 className='text-xl font-bold'>Legal & Press</h1>
                <p className='py-2'>Privacy Policy</p>
                <p className='py-2'>Terms & Conditions</p>
                <p className='py-2'>Presskit</p>
            </div>
        </div>
    );
};

export default Footer;