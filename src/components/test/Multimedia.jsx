
import React from 'react'
import Divider from './Divider'
import image from '../../images/bina.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { t } from 'i18next'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Multimedia() {
    return (
        <div className='  mx'>

            <div className='container mt-20'>
                <div className='flex justify-center items-end w-full '>
                    <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>{t('multimedia')}</div>
                    <Divider className='w-3/4' showright={true} />
                </div>
            </div>
            <div className="flex justify-between  w-full  items-center">
                <button className="custom-prev-buttona w-[5vw] flex mx-auto justify-center items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={2}
                    className='container'
                    navigation={{
                        prevEl: '.custom-prev-buttona',
                        nextEl: '.custom-next-buttona',
                    }}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                // navigation
                >
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-video'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-video'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-video'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}

                </Swiper>
                <button className="custom-next-buttona flex w-[5vw] mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default Multimedia
