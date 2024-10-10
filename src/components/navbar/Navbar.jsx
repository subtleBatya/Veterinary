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
import { useDispatch } from "react-redux";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logout } from "../../store/AuthSlice";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const dispatch = useDispatch();

  const handleLogout = () => {
      dispatch(logout());
  };
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    // <nav className="bg-white shadow">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       {/* Логотип */}
    //       <div className="">
    //         <img src="Logo.png" alt="Logo" width={100} className="" />
    //       </div>
    //       {/* Строка поиска */}
    //       <div className="hidden md:block grow mx-4">
    //         <div className="w-full max-w-lg mx-auto">
    //           <input
    //             type="text"
    //             className="w-full px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
    //             placeholder="Search"
    //           />
    //         </div>
    //       </div>

    //       {/* Иконки */}
    //       <div className="flex items-center space-x-6">
    //         <button className="text-gray-500 hover:text-gray-700 hidden md:inline-flex">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="1.5"
    //             stroke="currentColor"
    //             class="size-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    //             />
    //           </svg>
    //         </button>
    //         <div className="relative inline-block text-left">
    //           <div>
    //             <button
    //               type="button"
    //               className="inline-flex justify-start items-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700"
    //               id="menu-button"
    //               aria-expanded={isOpen}
    //               aria-haspopup="true"
    //               onClick={toggleMenu}
    //             >
    //               <img
    //                 src="vite.svg"
    //                 alt=""
    //                 className="size-9 hidden md:block"
    //               />
    //               <svg
    //                 className="-mr-1 ml-2 h-5 w-5 hidden md:block"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </button>
    //           </div>

    //           {isOpen && (
    //             <div
    //               className="hidden md:block origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    //               role="menu"
    //               aria-orientation="vertical"
    //               aria-labelledby="menu-button"
    //               tabIndex="-1"
    //             >
    //               <div className="py-1" role="none">
    //                 <div className="flex items-center justify-start ps-4">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke-width="1.5"
    //                     stroke="currentColor"
    //                     class="size-5"
    //                   >
    //                     <path
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    //                     />
    //                   </svg>
    //                   <a
    //                     href="#"
    //                     className="text-gray-700 block px-2 py-2 text-sm"
    //                     role="menuitem"
    //                     tabIndex="-1"
    //                     id="menu-item-0"
    //                   >
    //                     Profile
    //                   </a>
    //                 </div>
    //                 <div className="flex items-center justify-start ps-4">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke-width="1.5"
    //                     stroke="currentColor"
    //                     class="size-5"
    //                   >
    //                     <path
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
    //                     />
    //                   </svg>
    //                   <button className="text-gray-700 block px-2 py-2 text-sm">
    //                     Logout
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           )}
    //         </div>

    //         {/* Кнопка-бургер для мобильных */}
    //         <button
    //           onClick={toggleMenu}
    //           className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 md:hidden"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M4 6h16M4 12h16m-7 6h7"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Мобильное меню */}
    //   {isOpen && (
    //     <div className="md:hidden">
    //       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //         <a
    //           href="#"
    //           className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
    //         >
    //           Agyrly bejermek
    //         </a>
    //         <a
    //           href="#"
    //           className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
    //         >
    //           Sowuk we dünew
    //         </a>
    //         <a
    //           href="#"
    //           className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
    //         >
    //           Süýji keselini bejermek
    //         </a>
    //         <a
    //           href="#"
    //           className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
    //         >
    //           Ilkinji kömek
    //         </a>
    //         <a
    //           href="#"
    //           className="block text-gray-700 hover:bg-gray-200 rounded-md px-3 py-2"
    //         >
    //           Derini ideg etmek
    //         </a>
    //         <button
    //           type="button"
    //           className="inline-flex justify-start items-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700"
    //           id="menu-button"
    //           aria-expanded={isOpen}
    //           aria-haspopup="true"
    //           onClick={toggleMenu}
    //         >
    //           <img src="vite.svg" alt="" className="size-9" />
    //           <svg
    //             className="-mr-1 ml-2 h-5 w-5"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </nav>

    <Disclosure as="nav" className="bg-white container-xl">
      <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block flex-shrink-0 items-center">
              <img alt="Your Company" src="Logo.png" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block grow mx-4">
              {/* <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div> */}
              <div className="w-full max-w-lg mx-auto">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              {/* <span className="absolute -inset-1.5" /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44771 15.5523 9 15 9C14.4477 9 14 9.44771 14 10C14 10.5523 14.4477 11 15 11Z"
                  fill="#666666"
                />
                <path
                  d="M10 10C10 10.5523 9.55228 11 9 11C8.44771 11 8 10.5523 8 10C8 9.44771 8.44771 9 9 9C9.55228 9 10 9.44771 10 10Z"
                  fill="#666666"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.25146 5.27567V5C8.25146 2.92893 9.93039 1.25 12.0015 1.25C14.0726 1.25 15.7515 2.92893 15.7515 5V5.27567C16.4099 5.29605 16.9962 5.33261 17.5164 5.39818C18.7177 5.54961 19.6901 5.8682 20.4412 6.6018C20.6918 6.84656 20.9146 7.1183 21.1054 7.41205C21.6775 8.29247 21.7992 9.30842 21.7121 10.516C21.6269 11.6979 21.3301 13.1818 20.9535 15.0648L20.9343 15.1604C20.673 16.4673 20.465 17.5074 20.2076 18.3256C19.9425 19.1683 19.604 19.8497 19.0376 20.4017C18.8429 20.5915 18.6321 20.7643 18.4078 20.918C17.7555 21.3651 17.0209 21.5634 16.1426 21.6581C15.2898 21.75 14.2291 21.75 12.8963 21.75H11.1068C9.77395 21.75 8.71327 21.75 7.8605 21.6581C6.98214 21.5634 6.2476 21.3651 5.59531 20.918C5.37096 20.7643 5.16023 20.5915 4.96545 20.4017C4.39912 19.8497 4.0606 19.1683 3.79551 18.3256C3.53813 17.5074 3.33013 16.4673 3.06875 15.1604L3.04968 15.065C2.67304 13.1819 2.37624 11.698 2.291 10.516C2.2039 9.30842 2.32561 8.29247 2.89765 7.41205C3.08851 7.1183 3.31128 6.84656 3.5619 6.6018C4.31303 5.8682 5.28538 5.54961 6.48664 5.39818C7.00681 5.33261 7.59308 5.29605 8.25146 5.27567ZM9.75146 5C9.75146 3.75736 10.7589 2.75 12.0015 2.75C13.2441 2.75 14.2515 3.75736 14.2515 5V5.2522C13.8273 5.24999 13.3795 5.25 12.907 5.25H11.0961C10.6236 5.25 10.1758 5.24999 9.75146 5.2522V5ZM4.60995 7.67491C5.02439 7.27015 5.61792 7.01956 6.67424 6.88641C7.74514 6.75141 9.16376 6.75 11.1501 6.75H12.853C14.8393 6.75 16.2579 6.75141 17.3288 6.88641C18.3852 7.01956 18.9787 7.27015 19.3931 7.67491C19.5646 7.84238 19.717 8.02831 19.8476 8.2293C20.1632 8.71507 20.2926 9.34622 20.216 10.4081C20.1383 11.4847 19.8615 12.8761 19.472 14.8238C19.2002 16.1827 19.007 17.1434 18.7767 17.8755C18.5513 18.5919 18.3118 19.0145 17.9907 19.3275C17.8574 19.4573 17.7133 19.5755 17.5597 19.6808C17.1899 19.9343 16.7286 20.0863 15.9818 20.1667C15.2188 20.249 14.2389 20.25 12.853 20.25H11.1501C9.76417 20.25 8.78431 20.249 8.02124 20.1667C7.27453 20.0863 6.81322 19.9343 6.44334 19.6808C6.28984 19.5755 6.14566 19.4573 6.01239 19.3275C5.69125 19.0145 5.45174 18.5919 5.22638 17.8755C4.99609 17.1434 4.80293 16.1828 4.53113 14.8238C4.14159 12.8761 3.86476 11.4847 3.78711 10.4081C3.71052 9.34622 3.83984 8.71507 4.15547 8.2293C4.28606 8.02831 4.43848 7.84238 4.60995 7.67491Z"
                  fill="#666666"
                />
              </svg>

              {/* <BellIcon aria-hidden="true" className="h-6 w-6" /> */}
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                  {/* <span className="absolute -inset-1.5" /> */}
                  {/* <span className="sr-only">Open user menu</span> */}
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <div
                    onClick={handleLogout}
                    
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Sign out
                  </div>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <div className="w-50 max-w-lg mr-auto">
            <input
              type="text"
              className="w-full px-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search"
            />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
