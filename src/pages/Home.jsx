import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api/BrandApi";
import MainSlider from "../components/test/MainSlider";
import Categories from "../components/test/Categories";
import Product from "../components/test/Product";
import FamousPrd from "../components/test/FamousPrd";
import SalePrd from "../components/test/SalePrd";
const Home = () => {
  return (
    <div className=''>
      <div className='esas_bg '>
        {/* <div className="flex justify-between items-center">
          <div>
            <img src="" alt="" />
          </div>
        </div> */}
        
            <MainSlider />
            {/* <Categories /> */}
            <div className="esas_container mt-5 space-y-4">
                <div className="flex  mx-auto justify-between items-center">
                    <div className="h3">Su tayda  bir Category goymaly</div>
                    <div className=" text-green-600">Doly gormek</div>
                </div>
                <div className="grid grid-cols-4    gap-3">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                </div>
            </div>
            <div className="esas_container mt-5 space-y-4">
                <div className="flex  mx-auto justify-between items-center">
                    <div className="h3">Su tayda  bir Category goymaly</div>
                    <div className=" text-green-600">Doly gormek</div>
                </div>
                <div className="grid grid-cols-4    gap-3">
                        <FamousPrd/>
                        <FamousPrd/>
                        <FamousPrd/>
                        <FamousPrd/>
                </div>
            </div>

            <div className="esas_container mt-5 space-y-4">
                <div className="flex  mx-auto justify-between items-center">
                    <div className="h3">Su tayda  bir Category goymaly</div>
                    <div className=" text-green-600">Doly gormek</div>
                </div>
                <div className="grid grid-cols-4    gap-3">
                        <FamousPrd/>
                        <FamousPrd/>
                        <FamousPrd/>
                        <FamousPrd/>
                </div>
            </div>

            <div className="esas_container mt-5 space-y-4">
                <div className="flex  mx-auto justify-between items-center">
                    <div className="h3">Su tayda  bir Category goymaly</div>
                    <div className=" text-green-600">Doly gormek</div>
                </div>
                <div className="grid grid-cols-4    gap-3">
                        <FamousPrd/>
                        <FamousPrd/>
                        <FamousPrd/>
                        <FamousPrd/>
                </div>
            </div>


            {/* <div className="esas_container flex ">
                <div className=" w-full">
                {/* <SalePrd /> 
                </div>
                
                
            </div> */}
            
            <div className="mb-[1000px]"></div>


      </div>
      
      
      
      
    </div>
  );
};

export default Home;

// // src/components/BrandList.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllBrands } from '../api/BrandApi';

// const BrandList = () => {
//     const [brands, setBrands] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const fetchBrands = async () => {
//             try {
//                 const brandsData = await getAllBrands();
//                 setBrands(brandsData);
//             } catch (error) {
//                 console.error('Error fetching brands:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBrands();
//     }, []);
//     if (loading) {
//         return <p>Loading...</p>
//     }
//     if (error) {
//         return <p>{error}</p>
//     }

//     return (
//         <>
//         <div>
//             <h1>Brands are up to date, please fill them to get the newest ones!</h1>
//             <ul>
//                 {brands.map((brand) => (
//                     <li key={brand._id}>{brand.name}</li>
//                 ))}
//             </ul>
//         </div>
//         <button><Link to="/brands/create">Create Brand</Link></button>
//         </>
//         );
// };

// export default BrandList;
