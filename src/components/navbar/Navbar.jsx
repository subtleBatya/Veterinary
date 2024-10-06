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

import React, { useState } from "react";
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
          <div className="">
            <img src="Logo.png" alt="Logo" width={100} className="" />
          </div>
          {/* Строка поиска */}
          <div className="hidden md:block grow mx-4">
            <div className="w-full max-w-lg mx-auto">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Иконки */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-500 hover:text-gray-700 hidden md:inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-start items-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={toggleMenu}
                >
                  <img src="vite.svg" alt="" className="size-9" />
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {isOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <div className="flex items-center justify-start ps-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      <a
                        href="#"
                        className="text-gray-700 block px-2 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Profile
                      </a>
                    </div>
                    <div className="flex items-center justify-start ps-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                        />
                      </svg>
                      <button className="text-gray-700 block px-2 py-2 text-sm">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Кнопка-бургер для мобильных */}
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
            >
              Agyrly bejermek
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
            >
              Sowuk we dünew
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
            >
              Süýji keselini bejermek
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
            >
              Ilkinji kömek
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
            >
              Derini ideg etmek
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
