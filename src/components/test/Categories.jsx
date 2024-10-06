
import React from 'react'
import { NavLink } from 'react-router-dom'
import priceTag from '../../images/price-tag.png'
// import { t } from 'i18next'

function Categories() {
    return (
        <div className=' mt-20 pt-10 grid grid-cols-4 gap-3 esas_container'>
            <NavLink to={`/tazelikler/`} className='bg-[hsl(104,100%,93%)] rounded-lg cursor-pointer w-full aspect-auto flex items-end p-4 text-[#477139] font-semibold '>
                
            <div className=' flex items-center gap-3 font-bold w-full '>
                        <div className="w-1/6">
                            <img src={priceTag} alt="" />
                        </div>
                            {/* {t('youthPolicy')} */}
                        <div className='w-4/6 text-[20px]'>Get 25% <br />OFF</div>
                        <div className="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.0503 18.364C9.65973 18.7545 9.02656 18.7545 8.63604 18.364C8.24552 17.9734 8.24552 17.3403 8.63604 16.9497L13.5858 12L8.63604 7.05025C8.24552 6.65973 8.24552 6.02656 8.63604 5.63604C9.02657 5.24551 9.65973 5.24551 10.0503 5.63604L15.7071 11.2929Z" fill="#020A13"/>
                            </svg>
                        </div>
                    </div>
                
                
            </NavLink   >
            <NavLink to={`/tazelikler/`} className='bg-[hsl(43,85%,82%)] rounded-lg cursor-pointer w-full aspect-auto flex items-end p-4 text-[#477139] font-semibold '>
                
                    <div className=' flex items-center gap-3 font-bold w-full '>
                        <div className="w-1/6">
                            <img src={priceTag} alt="" />
                        </div>
                            {/* {t('youthPolicy')} */}
                        <div className='w-4/6 text-[20px]'>Get 25% <br />OFF</div>
                        <div className="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.0503 18.364C9.65973 18.7545 9.02656 18.7545 8.63604 18.364C8.24552 17.9734 8.24552 17.3403 8.63604 16.9497L13.5858 12L8.63604 7.05025C8.24552 6.65973 8.24552 6.02656 8.63604 5.63604C9.02657 5.24551 9.65973 5.24551 10.0503 5.63604L15.7071 11.2929Z" fill="#020A13"/>
                            </svg>
                        </div>
                    </div>
                
                
            </NavLink   >
            <NavLink to={`/makala/`} className='bg-[hsl(89,100%,82%)] rounded-lg cursor-pointer w-full  flex items-end p-4 text-goldColor font-semibold aspect-auto'>
                {/* <div className='w-1/2  text-[30px]'>
                {/* {t('makala')} 
                HELLO
                </div> */}
                <div className=' flex items-center gap-3 font-bold w-full '>
                        <div className="w-1/6">
                            <img src={priceTag} alt="" />
                        </div>
                            {/* {t('youthPolicy')} */}
                        <div className='w-4/6 text-[20px]'>Get 25% <br />OFF</div>
                        <div className="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.0503 18.364C9.65973 18.7545 9.02656 18.7545 8.63604 18.364C8.24552 17.9734 8.24552 17.3403 8.63604 16.9497L13.5858 12L8.63604 7.05025C8.24552 6.65973 8.24552 6.02656 8.63604 5.63604C9.02657 5.24551 9.65973 5.24551 10.0503 5.63604L15.7071 11.2929Z" fill="#020A13"/>
                            </svg>
                        </div>
                    </div>
            </NavLink>
            <NavLink to={`/library/`} className='bg-[hsl(280,88%,95%)] rounded-lg cursor-pointer w-full  flex items-end p-4 text-[#406C97] font-semibold aspect-auto'>
                {/* <div className='w-1/2  text-[30px]'>
                {/* {t('library')} 
                HELLO
                </div> */}
                <div className=' flex items-center gap-3 font-bold w-full '>
                        <div className="w-1/6">
                            <img src={priceTag} alt="" />
                        </div>
                            {/* {t('youthPolicy')} */}
                        <div className='w-4/6 text-[20px]'>Get 25% <br />OFF</div>
                        <div className="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.0503 18.364C9.65973 18.7545 9.02656 18.7545 8.63604 18.364C8.24552 17.9734 8.24552 17.3403 8.63604 16.9497L13.5858 12L8.63604 7.05025C8.24552 6.65973 8.24552 6.02656 8.63604 5.63604C9.02657 5.24551 9.65973 5.24551 10.0503 5.63604L15.7071 11.2929Z" fill="#020A13"/>
                            </svg>
                        </div>
                    </div>
            </NavLink>
        </div>
    )
}

export default Categories
