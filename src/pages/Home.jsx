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

    
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all'); // default 'all' to show all products
   

      // Fetch products
  const fetchProducts = async (category_id) => {
    try {
      const response = await axios.get(`${API_URL}/products`, {params: { category_id } });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

   // Filter products by selected category
   const filteredProducts = products.filter(product => {
    if (category === 'all') return true; // Show all products
    return product.category_id._id === category; // Filter by category_id._id
  });


  return (
    <div className=''>
      <div className='esas_bg '>
        {/* <div className="flex justify-between items-center">
          <div>
            <img src="" alt="" />
          </div>
        </div> */}


<div>
      <h1>Products</h1>

      {/* Dropdown for category selection */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        {/* Map through unique categories to show in the dropdown */}
        {Array.from(new Set(products.map(product => product.category_id?.name))).map((categoryName, idx) => (
          <option key={idx} value={products.find(product => product.category_id?.name === categoryName)?.category_id?._id}>
            {categoryName}
          </option>
        ))}
      </select>

      {/* Display filtered products */}
      <div>
        {filteredProducts.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category_id?.name}</p>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
          </div>
        ))}
      </div>
</div>
        
            <MainSlider />
            {/* <Categories /> */}
            <div className="esas_container mt-5 space-y-4">
                <div className="flex  mx-auto justify-between items-center">
                    <div className="h3">Su tayda  bir Category goymaly</div>
                    <div className=" text-green-600">Doly gormek</div>
                </div>
                <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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
                <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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
                <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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
                <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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

<div>
      <h1>Products</h1>

      {/* Dropdown for category selection */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        {/* Map through unique categories to show in the dropdown */}
        {Array.from(new Set(products.map(product => product.category_id?.name))).map((categoryName) => {
            const product = products.find(product => product.category_id?.name === categoryName);
            const category = product ? product.category_id : null; // Ensuring that category exists
            // const category = products.find(product => product.category_id.name === categoryName)?.category_id;
          return (
            category && (
                <option key={category._id} value={category._id}>
                    {category.name}
                </option>
            )
            
          );  
        } )}
      </select>

      {/* Display filtered products */}
      <div>
        {filteredProducts.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category_id?.name}</p>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
          </div>
        ))}
      </div>
</div>
            
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
