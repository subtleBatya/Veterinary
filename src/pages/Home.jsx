import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api/BrandApi";
import MainSlider from "../components/test/MainSlider";
import Categories from "../components/test/Categories";
import Product from "../components/test/Product";
const Home = () => {
  return (
    <div className="bg-white">
      <hr className="w-[970px] mt-2" />
      <div className="container-xl px-2">
        <div className="grid grid-cols-12 justify-between items-center pl-2 py-2">
          <span className="text-lg text-center">ferfe</span>
          <span className="text-lg text-center">ferfe</span>
          <span className="text-lg text-center">ferfe</span>
          <span className="text-lg text-center">ferfe</span>
          <span className="text-lg text-center">ferfe</span>
          <span className="text-lg text-center">ferfe</span>
        </div>
      </div>
      <MainSlider />
      <Categories />
      <div className="esas_container grid grid-cols-4 mt-5 gap-3">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div>
        <div>
          <h1>HEllo</h1>
          <h4>HELO</h4>
        </div>
      </div>
      <div className="mb-[1000px]"></div>
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
