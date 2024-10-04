
import React from 'react'
import imager from '../../images/bina.png'
import { t } from 'i18next'

function Product() {
    return (
        <div className='rounded-none cursor-pointer h-auto overflow-hidden'>
            <div className="image aspect-video  overflow-hidden ">
                <img src={imager} className='object-cover transition-transform duration-300 transform hover:scale-110  w-full  ' alt="Product" />
            </div>
            <div className="flex bg-white text-darkColor line-clamp-2 w-[90%] font-bold pt-3 flex-col">
                <div>{t('newsText')}</div>
            </div>
            <div className='text-goldColor mt-5 font-semibold'>
            10.02.2024
            </div>
            
        </div>
    )
}

export default Product
