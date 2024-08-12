import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
const Blog = () => {
    return (
        <div className='py-10'>
            <div className='grid justify-center '>
                <div className='grid justify-center'>
                    <p className='text-center border w-24 rounded-lg border-red-400 bg-green-200'>Our blog</p>
                </div>
                <div className='py-10'>
                    <h1 className='text-5xl text-center font-bold py-5'>News and Insights</h1>
                    <p className='text-center'>
                    Discover the latest industry news and valuable insights at Zan it solution. We provide informative articles and updates to keep you informed and inspired.
                    </p>
                </div>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow]}
            // className="mySwiper py-10"
            >
                <SwiperSlide>
                    <div className='pe-10'>
                        <img className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <img className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <img className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <img className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <img className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='pe-10'>
                        <img className='rounded-lg' height={500} width={500} src={"/image/group.jpg"} alt="Group" />
                        <h1 className='py-5 text-xl text-center font-semibold'>This highly anticipated technology could finally transform the world</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Blog;
