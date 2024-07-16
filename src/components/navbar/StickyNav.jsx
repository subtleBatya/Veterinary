import React, { useEffect, useRef, useState } from 'react'
// import { NavLink } from 'react-router-dom';

function StickyNav() {
    //      const [isSticky, setSticky] = useState(false);
    //   const [prevScrollPos, setPrevScrollPos] = useState(0);
    const navbarRef = useRef(null);

    //   useEffect(() => {
    //     const handleScroll = () => {
    //       const currentScrollPos = window.pageYOffset;
    //       const top = navbarRef.current.getBoundingClientRect().top;

    //       if (top <= 0) {
    //         setSticky(true);
    //       } else if (currentScrollPos < prevScrollPos) {
    //         setSticky(false);
    //       }

    //       setPrevScrollPos(currentScrollPos);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, [prevScrollPos]);
    const [isSticky, setSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState(null);

    const onHover = (e) => {
        setData(e.target.value)
    }
    const onUnHover = () => {
        setData(null)
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Change 100 to the scroll position where you want the navbar to become sticky
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>

            <div ref={navbarRef} className={`bg-primaryColor   navbar text-white ${isSticky ? 'fixed top-0 w-full z-40 ' : ''}`}>
                <div className='relative'>

                    <div className=' container pt-8  h-auto w-[100%] z-20 flex justify-between items-end pb-3'>
                        <div className="links ">
                            <ul className='flex justify-between items-center gap-4 font-semibold'>
                                <li className='cursor-pointer' value={`Baş sahypa`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} >
                                    Baş sahypa
                                </li>
                                <li className='cursor-pointer' value={`Ýaşlar Syýasaty`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                                    Ýaşlar Syýasaty
                                </li>
                                <li className='cursor-pointer' value={`Habarlar`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                                    Habarlar
                                </li>
                                <li className='cursor-pointer' value={`Mümkinçilikler`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                                    Mümkinçilikler
                                </li >
                                <li className='cursor-pointer' value={`Kitaphana`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                                    Kitaphana
                                </li>
                                <li className='cursor-pointer' value={`Medeniyet`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                                    Medeniýet
                                </li>
                                <li className='cursor-pointer' value={`Sport`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                                    Sport
                                </li>
                            </ul>

                        </div>
                        <div className='flex  items-center gap-6'>
                            {/* <NavLink to={`/search`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.1229 17.8666L18.4955 18.494C20.5272 16.4622 21.6686 13.7066 21.6686 10.8333C21.6686 7.96002 20.5272 5.2044 18.4955 3.17263C17.4906 2.16531 16.2967 1.36649 14.9821 0.822027C13.6676 0.277568 12.2583 -0.00179428 10.8355 9.92197e-06C9.41238 -0.00191882 8.00297 0.27737 6.68814 0.82183C5.37331 1.36629 4.179 2.16519 3.17388 3.17263C2.16763 4.17869 1.36946 5.37313 0.824874 6.6877C0.28029 8.00226 0 9.41122 0 10.8341C0 12.257 0.28029 13.666 0.824874 14.9806C1.36946 16.2951 2.16763 17.4896 3.17388 18.4956C4.179 19.5031 5.37331 20.302 6.68814 20.8464C8.00297 21.3909 9.41238 21.6702 10.8355 21.6682C12.2583 21.67 13.6676 21.3907 14.9821 20.8462C16.2967 20.3018 17.4906 19.5029 18.4955 18.4956L17.8681 19.1246L22.7435 24L24 22.7419L19.1229 17.8666ZM17.2375 17.2376C16.3985 18.0811 15.4005 18.7498 14.3014 19.205C13.2022 19.6602 12.0236 19.8929 10.8339 19.8895C9.64418 19.893 8.46559 19.6605 7.36639 19.2053C6.26719 18.75 5.2692 18.0812 4.43033 17.2376C3.58659 16.3987 2.91764 15.4008 2.46215 14.3016C2.00666 13.2025 1.77365 12.0239 1.77671 10.8341C1.77365 9.64434 2.00666 8.46576 2.46215 7.3666C2.91764 6.26745 3.58659 5.26956 4.43033 4.43068C5.2692 3.58702 6.26719 2.91822 7.36639 2.463C8.46559 2.00779 9.64418 1.7752 10.8339 1.77874C12.0236 1.77538 13.2022 2.00803 14.3014 2.46324C15.4005 2.91845 16.3985 3.58717 17.2375 4.43068C18.0807 5.26986 18.7492 6.26785 19.2044 7.36696C19.6596 8.46607 19.8925 9.64449 19.8894 10.8341C19.8925 12.0238 19.6596 13.2022 19.2044 14.3013C18.7492 15.4004 18.0807 16.3984 17.2375 17.2376Z" fill="white" />
                                </svg>
                            </NavLink> */}
                            <button className='text-lg rounded font-semibold rounded-none text-primaryColor bg-white px-4 py-1'>Giriş</button>
                        </div>

                    </div>
                    <div className={`absolute w-full p-5 z-20 shadow-lg bg-white text-black top-30 ${isVisible ? 'block' : 'hidden'}`}>
                        <div className='flex items-center container gap-4 flex-wrap' >
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis libero aperiam ea a magni magnam repellendus rem iure voluptates reprehenderit.
                            </div>
                            <div>
                                hello
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, officiis?
                            </div>
                        </div>
                    </div>
                </div>
                    {/* <div className={`${isVisible ? 'block' : 'hidden'} z-22 absolute top-0 bottom-0 right-0 left-0 h-[100vh] bg-[black] bg-opacity-40`}></div> */}


            </div>
            <div ref={navbarRef} className={`bg-primaryColor  navbar text-white ${isSticky ? 'block ' : 'hidden'}`}>
                <div className=' container pt-8  h-auto w-[100%] z-20 flex justify-between items-end pb-3'>
                    <div className="links">
                        <ul className='flex justify-between items-center gap-4 font-semibold'>
                            <li className='cursor-pointer' >
                                Baş sahypa
                            </li>
                            <li className='cursor-pointer'>
                                Ýaşlar Syýasaty
                            </li>
                            <li className='cursor-pointer'>
                                Habarlar
                            </li>
                            <li className='cursor-pointer'>
                                Mümkinçilikler
                            </li >
                            <li className='cursor-pointer'>
                                Kitaphana
                            </li>
                            <li className='cursor-pointer'>
                                Medeniýet
                            </li>
                            <li className='cursor-pointer'>
                                Sport
                            </li>
                        </ul>
                    </div>
                    <div className='flex  items-center gap-6'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M19.1229 17.8666L18.4955 18.494C20.5272 16.4622 21.6686 13.7066 21.6686 10.8333C21.6686 7.96002 20.5272 5.2044 18.4955 3.17263C17.4906 2.16531 16.2967 1.36649 14.9821 0.822027C13.6676 0.277568 12.2583 -0.00179428 10.8355 9.92197e-06C9.41238 -0.00191882 8.00297 0.27737 6.68814 0.82183C5.37331 1.36629 4.179 2.16519 3.17388 3.17263C2.16763 4.17869 1.36946 5.37313 0.824874 6.6877C0.28029 8.00226 0 9.41122 0 10.8341C0 12.257 0.28029 13.666 0.824874 14.9806C1.36946 16.2951 2.16763 17.4896 3.17388 18.4956C4.179 19.5031 5.37331 20.302 6.68814 20.8464C8.00297 21.3909 9.41238 21.6702 10.8355 21.6682C12.2583 21.67 13.6676 21.3907 14.9821 20.8462C16.2967 20.3018 17.4906 19.5029 18.4955 18.4956L17.8681 19.1246L22.7435 24L24 22.7419L19.1229 17.8666ZM17.2375 17.2376C16.3985 18.0811 15.4005 18.7498 14.3014 19.205C13.2022 19.6602 12.0236 19.8929 10.8339 19.8895C9.64418 19.893 8.46559 19.6605 7.36639 19.2053C6.26719 18.75 5.2692 18.0812 4.43033 17.2376C3.58659 16.3987 2.91764 15.4008 2.46215 14.3016C2.00666 13.2025 1.77365 12.0239 1.77671 10.8341C1.77365 9.64434 2.00666 8.46576 2.46215 7.3666C2.91764 6.26745 3.58659 5.26956 4.43033 4.43068C5.2692 3.58702 6.26719 2.91822 7.36639 2.463C8.46559 2.00779 9.64418 1.7752 10.8339 1.77874C12.0236 1.77538 13.2022 2.00803 14.3014 2.46324C15.4005 2.91845 16.3985 3.58717 17.2375 4.43068C18.0807 5.26986 18.7492 6.26785 19.2044 7.36696C19.6596 8.46607 19.8925 9.64449 19.8894 10.8341C19.8925 12.0238 19.6596 13.2022 19.2044 14.3013C18.7492 15.4004 18.0807 16.3984 17.2375 17.2376Z" fill="white" />
                        </svg> */}
                        <button>GITHUB</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StickyNav


// import React, { useEffect, useRef, useState } from 'react'
// // import { useTranslation } from 'react-i18next';
// import { NavLink } from 'react-router-dom';
// // import axiosInstance from '../../axios';

// function StickyNav() {
//     //      const [isSticky, setSticky] = useState(false);
//     //   const [prevScrollPos, setPrevScrollPos] = useState(0);
//     const navbarRef = useRef(null);
//     // const { t, i18n } = useTranslation();
//     //   useEffect(() => {
//     //     const handleScroll = () => {
//     //       const currentScrollPos = window.pageYOffset;
//     //       const top = navbarRef.current.getBoundingClientRect().top;

//     //       if (top <= 0) {
//     //         setSticky(true);
//     //       } else if (currentScrollPos < prevScrollPos) {
//     //         setSticky(false);
//     //       }

//     //       setPrevScrollPos(currentScrollPos);
//     //     };

//     //     window.addEventListener('scroll', handleScroll);

//     //     return () => {
//     //       window.removeEventListener('scroll', handleScroll);
//     //     };
//     //   }, [prevScrollPos]);
//     const [isSticky, setSticky] = useState(false);
//     // const [loading, isLoading] = useState(false);
//     // const [isVisible, setIsVisible] = useState(false);
//     // const [Cats, setCats] = useState(null);
//     // const [data, setData] = useState(null);

//     const onHover = (e) => {
//         setData(e.target.value)
//     }
//     const onUnHover = () => {
//         setData(null)
//     }
//     // const [selectedOption, setSelectedOption] = useState(null);
//     // const options = ['en', 'ru', 'tk'];

//     // const handleSelectChange = (event) => {
//     //     setSelectedOption(event.target.value);
//     //     i18n.changeLanguage(event.target.value)
//     //     getCats()
//     // };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 100) { // Change 100 to the scroll position where you want the navbar to become sticky
//                 setSticky(true);
//             } else {
//                 setSticky(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         getCats()
//         return () => {
//             window.removeEventListener('scroll', handleScroll);

//         };

//     }, []);

//     // const getCats = async () => {
//     //     try {
//     //         isLoading(true)
//     //         const response = await axiosInstance.get(`http://216.250.11.159/api/category/`);
//     //         console.log('response', response.data);
//     //         setCats(response?.data?.data)
//     //         isLoading(false)

//     //     } catch (error) {
//     //         console.error('Error fetching categories:', error);
//     //     }
//     // }

//     // const ContentOnHover = (cat) => {
//     //     setIsVisible(true)
//     //     console.log(cat.id);
//     //     setData(cat)
//     // }

//     return (
//         <>

//             <div ref={navbarRef} className={`bgBlue   navbar  text-white ${isSticky ? 'fixed top-0 w-full z-40 ' : ''}`}>
//                 <div className='relative'>

//                     <div className=' container pt-8  h-auto w-[100%] z-20 flex justify-between items-center pb-3'>
//                         {/* <div className="links ">
//                             {!loading ?

//                                 < ul className='flex justify-between  items-center group gap-4 font-semibold'>
//                                     {
//                                         Cats?.map((cat) => {
//                                             return (
//                                                 <>
//                                                     <li className='cursor-pointer xl:text-xl' value={cat?.label} onMouseEnter={() => ContentOnHover(cat)} >
//                                                         <div>
//                                                             {cat?.label}
//                                                         </div>

//                                                     </li>
//                                                 </>
//                                             )
//                                         })

//                                     }
//                                     <li className='cursor-pointer' onMouseEnter={() => setData()} >
//                                         <NavLink to={`/map`}>
//                                             {t('map')}
//                                         </NavLink>

//                                     </li>

//                                 </ul>
//                                 : 'loading'}


//                         </div> */}
//                         <div className='flex   items-center gap-6'>
//                             {/* <NavLink to={`/search`}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
//                                     <path d="M19.1229 17.8666L18.4955 18.494C20.5272 16.4622 21.6686 13.7066 21.6686 10.8333C21.6686 7.96002 20.5272 5.2044 18.4955 3.17263C17.4906 2.16531 16.2967 1.36649 14.9821 0.822027C13.6676 0.277568 12.2583 -0.00179428 10.8355 9.92197e-06C9.41238 -0.00191882 8.00297 0.27737 6.68814 0.82183C5.37331 1.36629 4.179 2.16519 3.17388 3.17263C2.16763 4.17869 1.36946 5.37313 0.824874 6.6877C0.28029 8.00226 0 9.41122 0 10.8341C0 12.257 0.28029 13.666 0.824874 14.9806C1.36946 16.2951 2.16763 17.4896 3.17388 18.4956C4.179 19.5031 5.37331 20.302 6.68814 20.8464C8.00297 21.3909 9.41238 21.6702 10.8355 21.6682C12.2583 21.67 13.6676 21.3907 14.9821 20.8462C16.2967 20.3018 17.4906 19.5029 18.4955 18.4956L17.8681 19.1246L22.7435 24L24 22.7419L19.1229 17.8666ZM17.2375 17.2376C16.3985 18.0811 15.4005 18.7498 14.3014 19.205C13.2022 19.6602 12.0236 19.8929 10.8339 19.8895C9.64418 19.893 8.46559 19.6605 7.36639 19.2053C6.26719 18.75 5.2692 18.0812 4.43033 17.2376C3.58659 16.3987 2.91764 15.4008 2.46215 14.3016C2.00666 13.2025 1.77365 12.0239 1.77671 10.8341C1.77365 9.64434 2.00666 8.46576 2.46215 7.3666C2.91764 6.26745 3.58659 5.26956 4.43033 4.43068C5.2692 3.58702 6.26719 2.91822 7.36639 2.463C8.46559 2.00779 9.64418 1.7752 10.8339 1.77874C12.0236 1.77538 13.2022 2.00803 14.3014 2.46324C15.4005 2.91845 16.3985 3.58717 17.2375 4.43068C18.0807 5.26986 18.7492 6.26785 19.2044 7.36696C19.6596 8.46607 19.8925 9.64449 19.8894 10.8341C19.8925 12.0238 19.6596 13.2022 19.2044 14.3013C18.7492 15.4004 18.0807 16.3984 17.2375 17.2376Z" fill="white" />
//                                 </svg>
//                             </NavLink> */}
//                             {/* <div className='relative'>

//                                 <select
//                                     value={selectedOption}
//                                     onChange={handleSelectChange}
//                                     className="block appearance-none w-full  text-white bg-transparent border-0  p-3 cursor-pointer rounded leading-tight focus:outline-none focus:shadow-outline"
//                                 >
//                                     {options.map((option, index) => (
//                                         <option key={index} className={`${selectedOption === option ? 'disabled ' : ''} border-0 text-black rounded-lg p-3 `} value={option}>{option}</option>
//                                     ))}
//                                 </select>

//                             </div> */}

//                         </div>

//                     </div>

//                 </div>
//                 {/* <div className={`${isVisible ? 'block' : 'hidden'} z-22 absolute top-0 bottom-0 right-0 left-0 h-[100vh] bg-[black] bg-opacity-40`}> */}
//                 {data?.children?.length > 0 &&
//                     <div onMouseLeave={() => setData()} className={`absolute   w-full p-5 z-20 shadow-lg  group-hover:opacity-1000 bg-white text-black   `}>
//                         <div className='flex items-center container gap-4 flex-wrap' >
//                             <div className='cursor-pointer'>
//                                 <NavLink to={data?.type === 'news' ? '/news' : 'yaslar'}>

//                                     {data?.label}
//                                 </NavLink>
//                             </div>
//                             <div className='flex gap-6'>
//                                 {data?.children?.map((cat) => {
//                                     // return (
//                                     // <>

//                                     if (cat?.type === 'vacancy') {
//                                         return (
//                                             <NavLink to={`/vacansy`} className='cursor-pointer'>{cat?.label}</NavLink>

//                                         )
//                                     } else if (cat.type === 'faq') {
//                                         return (
//                                             <NavLink to={`/questions`} className='cursor-pointer'>{cat?.label}</NavLink>

//                                         )
//                                     }
//                                     else if (cat.type === 'standart') {
//                                         return (
//                                             <NavLink to={`/yaslar`} className='cursor-pointer'>{cat?.label}</NavLink>

//                                         )
//                                     }
//                                      else {
//                                         return (
//                                             <NavLink  className='cursor-pointer'>{cat?.label}</NavLink>
//                                         )
//                                     }


//                                     // </>
//                                     // )
//                                 })}

//                             </div>
//                         </div>
//                     </div>
//                 }
//             </div>


//             <div ref={navbarRef} className={`bg-primaryColor  navbar text-white ${isSticky ? 'block ' : 'hidden'}`}>
//                 <div className=' container pt-8  h-auto w-[100%] z-20 flex justify-between items-end pb-3'>
//                     <div className="links">
//                         <ul className='flex justify-between items-center gap-4 font-semibold'>
//                             <li className='cursor-pointer' >
//                                 Baş sahypa
//                             </li>
//                             <li className='cursor-pointer'>
//                                 Ýaşlar Syýasaty
//                             </li>
//                             <li className='cursor-pointer'>
//                                 Habarlar
//                             </li>
//                             <li className='cursor-pointer'>
//                                 Mümkinçilikler
//                             </li >
//                             <li className='cursor-pointer'>
//                                 Kitaphana
//                             </li>
//                             <li className='cursor-pointer'>
//                                 Medeniýet
//                             </li>
//                             <li className='cursor-pointer'>
//                                 Sport
//                             </li>
//                         </ul>
//                     </div>
//                     <div className='flex  items-center gap-6'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
//                             <path d="M19.1229 17.8666L18.4955 18.494C20.5272 16.4622 21.6686 13.7066 21.6686 10.8333C21.6686 7.96002 20.5272 5.2044 18.4955 3.17263C17.4906 2.16531 16.2967 1.36649 14.9821 0.822027C13.6676 0.277568 12.2583 -0.00179428 10.8355 9.92197e-06C9.41238 -0.00191882 8.00297 0.27737 6.68814 0.82183C5.37331 1.36629 4.179 2.16519 3.17388 3.17263C2.16763 4.17869 1.36946 5.37313 0.824874 6.6877C0.28029 8.00226 0 9.41122 0 10.8341C0 12.257 0.28029 13.666 0.824874 14.9806C1.36946 16.2951 2.16763 17.4896 3.17388 18.4956C4.179 19.5031 5.37331 20.302 6.68814 20.8464C8.00297 21.3909 9.41238 21.6702 10.8355 21.6682C12.2583 21.67 13.6676 21.3907 14.9821 20.8462C16.2967 20.3018 17.4906 19.5029 18.4955 18.4956L17.8681 19.1246L22.7435 24L24 22.7419L19.1229 17.8666ZM17.2375 17.2376C16.3985 18.0811 15.4005 18.7498 14.3014 19.205C13.2022 19.6602 12.0236 19.8929 10.8339 19.8895C9.64418 19.893 8.46559 19.6605 7.36639 19.2053C6.26719 18.75 5.2692 18.0812 4.43033 17.2376C3.58659 16.3987 2.91764 15.4008 2.46215 14.3016C2.00666 13.2025 1.77365 12.0239 1.77671 10.8341C1.77365 9.64434 2.00666 8.46576 2.46215 7.3666C2.91764 6.26745 3.58659 5.26956 4.43033 4.43068C5.2692 3.58702 6.26719 2.91822 7.36639 2.463C8.46559 2.00779 9.64418 1.7752 10.8339 1.77874C12.0236 1.77538 13.2022 2.00803 14.3014 2.46324C15.4005 2.91845 16.3985 3.58717 17.2375 4.43068C18.0807 5.26986 18.7492 6.26785 19.2044 7.36696C19.6596 8.46607 19.8925 9.64449 19.8894 10.8341C19.8925 12.0238 19.6596 13.2022 19.2044 14.3013C18.7492 15.4004 18.0807 16.3984 17.2375 17.2376Z" fill="white" />
//                         </svg>
//                         <button className='text-lg rounded font-semibold rounded-none text-primaryColor bg-white px-4 py-1'>Giriş</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default StickyNav