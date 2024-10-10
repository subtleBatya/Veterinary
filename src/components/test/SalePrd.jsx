
import React from 'react'
import imager from './../../images/karasarimsak.png'
import pasta from './../../images/disbeyaz.png'
// import { t } from 'i18next'

function SalePrd() {
    return (
        <div className="flex gap-3  mt-8">
            <div className='flex w-1/2 bg-blue-200 items-center rounded-lg'>
                <div className="w-1/2">
                    <div className="btn bg-green-400  hover:bg-white hover:text-green-400">25% OFF</div>
                    <div className="h3">BLACK GARLIC OIL</div>
                    <div className="h4 line-clamp-3">Gara sarymsak yagy bilen has guycli we galyn saclar.</div>
                    <div className=""><s>600</s> </div>
                    <div className="">400</div>
                </div>
                <div className="w-1/2">
                    <img src={imager} alt="" />
                </div>
            </div>
            <div className=' w-1/2 flex-col space-y-3 '>
                <div className=" flex bg-yellow-200 p-2 rounded-lg">
                    <div className="w-1/2">
                        <div className="">25% OFF</div>
                        <div className="">BLACK GARLIC OIL</div>
                        <div className="">Gara sarymsak yagy bilen has guycli we galyn saclar.</div>
                        <div className=""><s>600</s> </div>
                        <div className="">400</div>
                    </div>
                    <div className="w-1/2">
                        <img src={pasta} alt="" />
                    </div>
                </div>
                <div className=" flex bg-green-200 p-2 rounded-lg ">
                    <div className="w-1/2">
                        <div className="">25% OFF</div>
                        <div className="">BLACK GARLIC OIL</div>
                        <div className="">Gara sarymsak yagy bilen has guycli we galyn saclar.</div>
                        <div className=""><s>600</s> </div>
                        <div className="">400</div>
                    </div>
                    <div className="w-1/2">
                        <img src={pasta} alt="" />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default SalePrd
