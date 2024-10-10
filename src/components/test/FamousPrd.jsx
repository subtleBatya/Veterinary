
import React from 'react'
import imager from '../../images/apparatus.png'
// import { t } from 'i18next'

function FamousPrd() {
    return (
        <div className='rounded-none aspect-auto cursor-pointer bg-white h-auto overflow-hidden'>
            <div className=' border-b-2'>
                <div className="image mx-auto w-[220px] p-3 overflow-hidden">
                    <img src={imager} className=' object-cover transition-transform duration-300 transform hover:scale-110  w-full  ' alt="Product" />
                </div>
            </div>
            
            
            <div className='ps-2 pb-3'>
                <div className="flex bg-white text-darkColor line-clamp-2 text-lg  font-bold pt-3 flex-col">
                    {/* <div>{t('newsText')}</div> */}
                    <div>Folley Kateter</div>
                </div>
                <div className='text-goldColor text-sm font-semibold'>
                200.50 TM
                </div>
            </div>
            <div className=' bg-green-500 rounded-b-lg text-center p-1 text-white'>
                Sebede gosun
            </div>
            
            
        </div>
    )
}

export default FamousPrd
