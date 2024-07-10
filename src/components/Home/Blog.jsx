import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Blog = () => {
    return (
        <div className='py-10'>
            <div className='grid justify-center '>
                <div className='grid justify-center'>
                    <p className='text-center border w-24 rounded-lg border-red-400 bg-green-200'>Our blog</p>
                </div>
                <div className='py-10'>
                    <h1 className='text-5xl text-center font-bold py-5'>News and Knowledge</h1>
                    <p className='text-center'>
                        Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices urna <br /> arcu quis. Tristique potenti vitae in adipiscing. Eu augue cras quis nec proin pharetra netus massa.
                    </p>
                </div>
            </div>
            <Swiper
                watchSlidesProgress={true}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper py-10"
            >
                <SwiperSlide>
                    <div className='pe-10'>
                        <Image className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <Image className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <Image className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <Image className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <Image className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <Image className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Blog;
