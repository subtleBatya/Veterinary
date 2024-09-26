import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../api/CategoryApi'


const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${API_URL}/secret/category/${id}`);
      setCategories(categories.filter(category => category._id !== id));
    } catch (error) {
      console.error('Error deleting brand:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Categories</h1>
      <div className="btn"><Link to="/categories/create">Create Category</Link></div>
      {/* <CreateBrand /> */}
      <table className="table">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Image</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category) => {
                            return (
                                <tr key={category._id} className=' gap-8 '>
                                    
                                    <td>{category.name}</td>
                                    <td>
                                      {category.image && (
                                        <div className=' w-[200px] h-[200px]'>
                                          <img src={`${API_URL}` + `${category.image}`   } alt="" />
                                        </div>
                                        )}
                                    </td>
                                    
                                    
                                    <td style={{width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className="btn btn-primary btn-sm me-1" to={"/categories/" + category._id + "/edit"  }>Edit</Link>
                                        <button onClick={() => deleteCategory(category._id)} type="button"  className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    {/*  <ul className=' mt-5'>
        {brands.map((brand) => (
          <li key={brand._id}>
            <h2>{brand.name}</h2>
            {brand.image && (
            <div className=' w-16'>
              <img src={`${API_URL}` + `${brand.image}`   } alt="" />
            </div>
            )}

            {/* {brand.image && (
              <img src={`${API_URL}/${brand.image}/uploads/`} alt={brand.name} />
            )} 
          </li>
        ))}
      </ul>  */}
    </div>
  );
};

export default CategoryList;



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




// import React, {useEffect, useState} from "react";
// import { getAllCategories } from "../api/CategoryApi";

// const CategoryList = () => {
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const categoriesData = await getAllCategories();

//                 setCategories(categoriesData);
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchCategories();
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if(error) {
//         return <p>{error}</p>;
//     }
    

//     return (
//         <div>
//             <h1>Categories</h1>
//             <ul>
//                 {categories.map((category) => (
//                     <li key={category._id}>
//                         {category.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CategoryList;
