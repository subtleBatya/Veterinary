import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../api/BrandApi'


const BrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(`${API_URL}/brands`);
        setBrands(response.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  const deleteBrand = async (id) => {
    try {
      await axios.delete(`${API_URL}/secret/brand/${id}`);
      setBrands(brands.filter(brand => brand._id !== id));
    } catch (error) {
      console.error('Error deleting brand:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>Brands</h1>
      <div className="btn"><Link to="/brands/create">Create Brand</Link></div>
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
                        brands.map((brand) => {
                            return (
                                <tr key={brand._id} className=' gap-8 '>
                                    
                                    <td>{brand.name}</td>
                                    <td>
                                      {brand.image && (
                                        <div className=' w-[200px] h-[200px]'>
                                          <img src={`${API_URL}` + `${brand.image}`   } alt="" />
                                        </div>
                                        )}
                                    </td>
                                    
                                    
                                    <td style={{width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className="btn btn-primary btn-sm me-1" to={"/brands/" + brand._id + "/edit"  }>Edit</Link>
                                        <button onClick={() => deleteBrand(brand._id)} type="button"  className="btn btn-danger btn-sm">Delete</button>
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

export default BrandList;



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