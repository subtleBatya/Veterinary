
// import React, { useState } from 'react'
// import StickyNav from './StickyNav'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Link } from 'react-router-dom' 
// import Example from '../Example'

// function Navbar() {

//     const [isVisible, setIsVisible] = useState(false)
   

//     return (
//          <div className=' bg-blue-700 z-20 relative text-white'>

//             <div  className=' container pt-10   flex justify-between  pb-3'>
//                 <div className='flex align-middle items-center text-start w-1/2 flex space-x-3 font-semibold  '>
//                    <div className=' text-xl'>Veterinarian Store</div>
//                    <div><Link to="Veterinary/">Home</Link></div>
//                    <div><Link to="/contact">Contacts</Link></div>

//                 </div>
//                 <div className=' text-end w-1/4 ' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} >
//                 {/* <Link to="/">
//                     Admin
//                 </Link> 
//                 <div className={` ${isVisible ? 'block' : 'hidden'}`}>
//                 <Link to="/product">
//                     Products
//                 </Link> 
//                 </div>
//                 <div className={` ${isVisible ? 'block' : 'hidden'}`}>
//                     Profile
//                 </div>
//                 <div className={` ${isVisible ? 'block' : 'hidden'}`}>
//                     Logout
//                 </div> */}
//                 <Example />
//                 </div>
               
//             </div>
            
//             {/* <StickyNav /> */}
//          </div>
       
//     )
// }

// export default Navbar


import React, { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Логотип */}
          <div className="flex-shrink-0">
            <img src="Logo.png" alt="Logo" width={100} className="" />
          </div>
          
          {/* Строка поиска */}
          <div className="hidden md:block flex-grow mx-4">
            <div className="relative w-full max-w-lg mx-auto">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Search medicine, medical products"
              />
              <button
                type="button"
                className="absolute right-0 top-0 mt-2 mr-2 px-3 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Иконки */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-500 hover:text-gray-700 hidden md:inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 14.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700 hidden md:inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18m-9 6h9" />
              </svg>
            </button>
            <img
              className="h-8 w-8 rounded-full hidden md:inline-flex"
              src="https://example.com/user-profile.jpg"
              alt="User Profile"
            />

            {/* Кнопка-бургер для мобильных */}
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 md:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2">Agyrly bejermek</a>
            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2">Sowuk we dünew</a>
            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2">Süýji keselini bejermek</a>
            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2">Ilkinji kömek</a>
            <a href="#" className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2">Derini ideg etmek</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

