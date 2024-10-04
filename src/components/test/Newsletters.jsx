
import React from 'react'
import SingleNewsletter from './SingleNewsletter'
import { NavLink } from 'react-router-dom'

import { t } from 'i18next'

function Newsletters() {
    return (
        <div className='container mt-20'>
            <div className="flex font-semibold items-center justify-between w-full">
                <div className='text-[30px]'>{t('makala')}</div>
                <div className='flex text-[#BEBEBE] cursor-pointer items-center gap-2'>
                    <NavLink to={'/makala'} className='p-0 text-sm '>{t('dolyGorBtn')}</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 10" fill="none">
                        <path d="M1 1L4 5L1 9" stroke="#C5C5C5" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <div className="grid mt-5 grid-cols-3 gap-4">
                <SingleNewsletter/>
                <SingleNewsletter/>
                <SingleNewsletter/>
                <SingleNewsletter/>
                <SingleNewsletter/>
                <SingleNewsletter/>
            </div>
        </div>
    )
}

export default Newsletters
