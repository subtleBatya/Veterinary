
import React, { useState } from 'react'
import StickyNav from './StickyNav'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom' 
import Example from '../Example'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)
   

    return (
         <div className=' bg-blue-700 z-20 relative text-white'>

            <div  className=' container pt-10   flex justify-between  pb-3'>
                <div className='flex align-middle items-center text-start w-1/2 flex space-x-3 font-semibold  '>
                   <div className=' text-xl'>Veterinarian Store</div>
                   <div><Link to="/">Home</Link></div>
                   <div><Link to="/contact">Contacts</Link></div>

                </div>
                <div className=' text-end w-1/4 ' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} >
                {/* <Link to="/">
                    Admin
                </Link> 
                <div className={` ${isVisible ? 'block' : 'hidden'}`}>
                <Link to="/product">
                    Products
                </Link> 
                </div>
                <div className={` ${isVisible ? 'block' : 'hidden'}`}>
                    Profile
                </div>
                <div className={` ${isVisible ? 'block' : 'hidden'}`}>
                    Logout
                </div> */}
                <Example />
                </div>
               
            </div>
            
            {/* <StickyNav /> */}
         </div>
       
    )
}

export default Navbar
