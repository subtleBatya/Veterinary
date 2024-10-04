
import React from 'react'
import { NavLink } from 'react-router-dom'
import { t } from 'i18next'

function Categories() {
    return (
        <div className='container mt-20 pt-10 grid grid-cols-3 gap-3'>
            <NavLink to={`/tazelikler/`} className='bg-[#E3FFD9] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-[#477139] font-semibold aspect-video'>
                <div className='w-1/2  text-[30px]'>

                    {t('youthPolicy')}
                </div>
            </NavLink   >
            <NavLink to={`/makala/`} className='bg-[#FFF4E1] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-goldColor font-semibold aspect-video'>
                <div className='w-1/2  text-[30px]'>
                {t('makala')}
                </div>
            </NavLink>
            <NavLink to={`/library/`} className='bg-[#C6E3FF] cursor-pointer w-full aspect-[7/5] flex items-end p-5 text-[#406C97] font-semibold aspect-video'>
                <div className='w-1/2  text-[30px]'>
                {t('library')}
                </div>
            </NavLink>
        </div>
    )
}

export default Categories
