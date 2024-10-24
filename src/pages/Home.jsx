import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api/BrandApi";

function ProductDisplay() {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch all products on component mount
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="rounded-none aspect-auto cursor-pointer bg-white h-auto overflow-hidden"
            >
              <div className="border-b-2">
                <div className="image mx-auto w-[220px] p-3 overflow-hidden">
                {product.image && (
                                        <div className=' w-[200px] h-[200px]'>
                                          <img src={`${API_URL}` + `${product.image}`   } alt="" />
                                        </div>
                                        )}
                </div>
              </div>
              <div className="ps-2 pb-3">
                <div className="flex bg-white text-darkColor line-clamp-2 text-lg font-bold pt-3 flex-col">
                  <div>{product.name}</div>
                </div>
                <div className="text-goldColor text-sm font-semibold">
                  {product.price} TM
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p> // Fallback message if no products exist
        )}
      </div>
    </div>
  );
}

export default ProductDisplay;



// Filtering By Category

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../api/BrandApi";

// function ProductDisplay() {
//   const [categories, setCategories] = useState([]);
//   const [productsByCategory, setProductsByCategory] = useState({}); // Store products for each category
//   const [products, setProducts] = useState([])
//   // Fetch all categories
//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/categories`);
//       setCategories(response.data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   // Fetch products by category
//   const fetchProductsByCategory = async (categoryId) => {
//     try {
//       const response = await axios.get(`${API_URL}/products`, {
//         params: { category_id: categoryId },
//       });
//       return response.data;
//     } catch (error) {
//       console.error(`Error fetching products for category ${categoryId}:`, error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     // Fetch all categories on component mount
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // For each category, fetch the corresponding products
//     const fetchAllProducts = async () => {
//       const products = {};

//       for (const category of categories) {
//         const categoryProducts = await fetchProductsByCategory(category._id);
//         // productsByCategory[category._id] = products;
//         products[category._id] = categoryProducts;
//       }

//       setProductsByCategory(products);
//     };

//     if (categories.length) {
//       fetchAllProducts();
//     }
//   }, [categories]);

//   return (
//     <div>
      
//         <div key={category._id} className="category-section">
//           {/* <h2>{category.name}</h2> Category name */}
//           <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
//             {products.map((product) => (
//               <div key={product._id} className="rounded-none aspect-auto cursor-pointer bg-white h-auto overflow-hidden">
//                 <div className="border-b-2">
//                   <div className="image mx-auto w-[220px] p-3 overflow-hidden">
//                     <img
//                       src={product.image || 'path/to/default/image.jpg'}
//                       className="object-cover transition-transform duration-300 transform hover:scale-110 w-full"
//                       alt={product.name}
//                     />
//                   </div>
//                 </div>
//                 <div className="ps-2 pb-3">
//                   <div className="flex bg-white text-darkColor line-clamp-2 text-lg font-bold pt-3 flex-col">
//                     <div>{product.name}</div>
//                   </div>
//                   <div className="text-goldColor text-sm font-semibold">
//                     {product.price} TM
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
      
//     </div>
//   );
// }

// export default ProductDisplay;


// Filtering by Category Ends Here



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../api/BrandApi";
// import MainSlider from "../components/test/MainSlider";
// import Categories from "../components/test/Categories";
// import Product from "../components/test/Product";
// import FamousPrd from "../components/test/FamousPrd";
// import SalePrd from "../components/test/SalePrd";
// const Home = () => {

    
//     const [products, setProducts] = useState([]);
//     // const [category, setCategory] = useState('all'); // default 'all' to show all products
//     const [categories, setCategories] = useState([]);
//     // const cate1Id = "670a975dcc7d2b56a18f86e0";

// // Fetch products from the API grouped by categories
//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/products`);
//       const groupedByCategory = groupByCategory(response.data); // Function to group products
//       setCategories(groupedByCategory);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   // Function to group products by category
//   const groupByCategory = (products) => {
//     return products.reduce((acc, product) => {
//       const categoryId = product.category_id;
//       if (!acc[categoryId]) {
//         acc[categoryId] = [];
//       }
//       acc[categoryId].push(product);
//       return acc;
//     }, {});
//   };


//   //     // Fetch products
//   // const fetchProducts = async (category_id) => {
//   //   try {
//   //     const response = await axios.get(`${API_URL}/products`, {params: { category_id: cate1Id },});
//   //     setProducts(response.data);
//   //   } catch (error) {
//   //     console.error('Error fetching products:', error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchProducts();
//   // }, []);

//    // Filter products by selected category
//   //  const filteredProducts = products.filter(product => {
//   //   if (category === 'all') return true; // Show all products
//   //   return product.category_id?._id === category; // Filter by category_id._id
//   // });


//   return (
//     <div className=''>
//       <div className='esas_bg '>
//         {/* <div className="flex justify-between items-center">
//           <div>
//             <img src="" alt="" />
//           </div>
//         </div> */}



        
//             <MainSlider />
//             {/* <Categories /> */}
//             <div className="esas_container mt-5 space-y-4">
//                 <div className="flex  mx-auto justify-between items-center">
//                     <div className="h3">Su tayda  bir Category goymaly</div>
//                     <div className=" text-green-600">Doly gormek</div>
//                 </div>
//                 {/* <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
//                         <Product/>
//                         <Product/>
//                         <Product/>
//                         <Product/>
//                 </div> */}

//               <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
//                 {/* Map through products and render the Product component */}
//                 {products.map((product) => (
//                   <Product
//                     key={product._id}
//                     name={product.name}              // Pass product name
//                     price={product.price}            // Pass product price
//                     image={product.image}            // Pass product image
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="esas_container mt-5 space-y-4">
//                 <div className="flex  mx-auto justify-between items-center">
//                     <div className="h3">Category 1</div>
//                     <div className=" text-green-600">Doly gormek</div>
//                 </div>
//                 <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
//                         <FamousPrd/>
//                         <FamousPrd/>
//                         <FamousPrd/>
//                         <FamousPrd/>
//                 </div>
//             </div>

//             <div className="esas_container mt-5 space-y-4">
//                 <div className="flex  mx-auto justify-between items-center">
//                     <div className="h3">Category 2</div>
//                     <div className=" text-green-600">Doly gormek</div>
//                 </div>
//                 <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
//                         <FamousPrd/>
//                         <FamousPrd/>
//                         <FamousPrd/>
//                         <FamousPrd/>
//                 </div>
//             </div>

//             <div className="esas_container mt-5 space-y-4">
//                 <div className="flex  mx-auto justify-between items-center">
//                     <div className="h3">Su tayda  bir Category goymaly</div>
//                     <div className=" text-green-600">Doly gormek</div>
//                 </div>
//                 <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
//                         <FamousPrd/>
//                         <FamousPrd/>
//                         <FamousPrd/>
//                         <FamousPrd/>
//                 </div>
//             </div>
            

//             {/* <div className="esas_container flex ">
//                 <div className=" w-full">
//                 {/* <SalePrd /> 
//                 </div>
                
                
//             </div> */}

// <div>
//       {/* Loop through categories */}
//       {Object.entries(categories).map(([categoryId, products]) => (
//         <div key={categoryId}>
//           <h2 className="font-bold text-xl my-5">Category {categoryId}</h2>
//           <div className="grid grid-cols-4 gap-3">
//             {products.map((product) => (
//               <Product key={product._id} category={product} />
//             ))}
//           </div>
//         </div>
//       ))}
// </div>
// <div>
//       <h1>Products</h1>

//       {/* Dropdown for category selection */}
//       <select onChange={(e) => setCategory(e.target.value)}>
//         <option value="all">All Categories</option>
//         {/* Map through unique categories to show in the dropdown */}
//         {Array.from(new Set(products.map(product => product.category_id?.name))).map((categoryName) => {
//             const product = products.find(product => product.category_id?.name === categoryName);
//             const category = product ? product.category_id : null; // Ensuring that category exists
//             // const category = products.find(product => product.category_id.name === categoryName)?.category_id;
//           return (
//             category && (
//                 <option key={category._id} value={category._id}>
//                     {category.name}
//                 </option>
//             )
            
//           );  
//         } )}
//       </select>

//       {/* Display filtered products */}
//       {/* <div>
//         {filteredProducts.map(product => (
//           <div key={product._id}>
//             <h3>{product.name}</h3>
//             <p>Category: {product.category_id?.name}</p>
//             <p>Price: ${product.price}</p>
//             <img src={product.imageUrl} alt={product.name} />
//           </div>
//         ))}
//       </div> */}
// </div>
            
//             <div className="mb-[1000px]"></div>

            


//       </div>
      
      
      
      
//     </div>
//   );
// };

// export default Home;

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
