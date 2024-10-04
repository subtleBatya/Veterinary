
import React from 'react'
import Divider from './Divider'
import image from '../../assets/react.svg'
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
        <div className=''>

            <div className='container mt-20'>
                <div className='flex justify-center items-end w-full '>
                    <div className='w-1/4 p-0 m-0 inline-block align-middle text-darkColor font-semibold text-[30px] '>{t('gallery')}</div>
                    <Divider className='w-3/4' showright={true} />
                </div>


            </div>
            <div className="flex justify-between  items-center">
                <button className="custom-prev-buttone w-[5vw] flex mx-auto justify-center items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M13.5001 0.999999L1.00006 16L13.5001 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>
                <Swiper
                    spaceBetween={10}
                    className='container'
                    navigation={{
                        prevEl: '.custom-prev-buttone',
                        nextEl: '.custom-next-buttone',
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                // navigation
                >
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-[4/3]'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-[4/3]'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-[4/3]'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mt-10 cursor-pointer'>
                        <div className='w-full aspect-[4/3]'>
                            <img src={image} className='w-full h-full object-cover' alt="" />
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 2</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 3</SwiperSlide> */}
                    {/* <SwiperSlide className='h-[100vh] bg-[red]'>Slide 4</SwiperSlide> */}

                </Swiper>
                <button className="custom-next-buttone flex w-[5vw] mx-auto justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="32" viewBox="0 0 15 32" fill="none">
                        <path d="M0.849122 0.999999L13.3491 16L0.849121 31" stroke="#D3AA65" stroke-width="1.5" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default Multimedia
