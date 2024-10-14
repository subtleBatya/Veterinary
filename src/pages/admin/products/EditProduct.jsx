// CreateProduct.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../api/BrandApi';


const EditProduct = () => {

  const { id } = useParams() // HERE
//   const [initialData, setInitialData] = useState()
  const navigate = useNavigate()

  const [brands, setBrands] = useState([]);
    useEffect(() => {
        const fetchBrands = async () => {
          try {
            const response = await axios.get(`${API_URL}/brands`);
            setBrands(response.data);
          } catch (error) {
            console.error('Error fetching Cats:', error);
          }
        };
    
        fetchBrands();
      }, []);
  

  const [cats, setCats] = useState([]);
    useEffect(() => {
        const fetchCats = async () => {
          try {
            const response = await axios.get(`${API_URL}/categories`);
            setCats(response.data);
          } catch (error) {
            console.error('Error fetching Cats:', error);
          }
        };
    
        fetchCats();
      }, []);


      const [productData, setProductData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        brand: '',
        image: null,
      });

      useEffect(() => {
        const getProduct = async () => {
          try {
            const response = await axios.get(`http://212.111.80.94/product/${id}`); // HERE WE USE AXIOS
            console.log(response.data);
            setProductData({
            //   id: response.data._id,
              name: response.data.name || '', // Default to an empty string if undefined
              price: response.data.price || '',
              description: response.data.descrition || '',
              category: response.data.category || '',
              brand: response.data.brand || '',
              
            //   description: response.data.description || '',
              image: null,
            });
          } catch (error) {
            console.error('Error fetching brand details:', error);
          }
        };
    
        getProduct();
      }, [id]);

//     function getProduct() {
//         fetch("http://212.111.80.94/product/" ) // HERE WE USE FETCH
//         .then(response => {
//             if (response.ok) {
//             return response.json()
//         }
        
//         throw new Error()
//     })
//     .then(data => {
//         setInitialData(data)
//     })
//     .catch(error => {
//         alert("Harydyn detallaryny okap bilenok")
//     })
    
// }

// useEffect(getProduct, [])
  //   Try this with Axios later now do it with fetch API


//   function getProduct() {
//     try{
//     const response = axios.get("http://212.111.80.94/products" + params.id)
//     console.log('Product fetched successfully:', response.data)}
//   catch (error) {
//         console.error('Error fetching product:', error);
//       }
// }

  

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };


  const handleFileChange = (e) => {
    setProductData({
      ...productData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    if (productData.image) {
      formData.append('product-photo', productData.image);
    }

    try {
      const response = await axios.patch(`${API_URL}/secret/product/${id}` , formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product created successfully:', response.data);
      navigate("/Veterinary/admin/products")
      // Optionally, redirect to products page or clear the form
    } catch (error) {
      console.error('Error creating product:', error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className=' container my-4'>
        <div className='row '>
          <div className='  md:col-span-8  rounded border '>
            <h2 className=' text-center mb-5'>Edit Product</h2>

            <div className='   justify-center  '>
                    <label className=' text-center text-lg me-2'>ID</label>
                    <input
                    readOnly
                    className=' border-none blue form-control-plaintext'
                    defaultValue={productData.id} // HERE 
                    />
            </div>
            
            <form onSubmit={handleSubmit} encType='multipart/form-data' className=' justify-center '>
        
              <div className=' w-[1/2] '>
                    {/* For Name Input */}
                  <div className='   justify-center  '>
                    <label className=' text-center text-lg me-2'>Name</label>
                    <input
                    type="text"
                    name="name"
                    value={productData.name || ''}
                    onChange={handleChange}
                    className=' border-none blue'
                    required
                    />
                  </div>

                  {/* For Brand Input */}
                  <div className='   justify-center  '>
                    <label className=' text-center text-lg me-2'>Brand</label>
                    <select name="brand" value={productData.brand} onChange={handleChange} required>
                        <option value="" disabled>Select a brand</option>
                        {brands.map((brand) => (
                        <option key={brand._id} value={brand._id}>
                            {brand.name}
                        </option>
                        ))}
                    </select>
                  </div>
                  
                  {/* For Price Input */}
                  <div className=' justify-center  '>
                    <label className=' text-lg me-2'>Price</label>
                    <input
                    className='  border-none blue'
                    value={productData.price || ''}
                    type="number"
                    name="price"
                    onChange={handleChange}
                    required
                  />
                  </div>
                  
                  {/* For Description */}

                  <div className=' justify-center  '>
                    <label className=' text-center text-lg col-span-6'>Description</label>
                    <textarea
                    className='  outline-blue-500'
                    value={productData.description}
                    name="description"
                    type="text"
                    onChange={handleChange}
                    required
                  ></textarea>
                  </div>    

                  {/* For Category */}
                  

                <div>
                    <label  className=' text-center text-lg col-span-6'>Category</label>
                    <select name="category" value={productData.category} onChange={handleChange} required>
                        <option value="" disabled>Select a category</option>
                        {cats.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                            {cat.name}
                        </option>
                        ))}
                    </select>
                </div>


                  {/* <div className='   '>
                    <label className=' text-center text-lg col-span-6'>Category</label>
                   <select name="category" id="" defaultValue={initialData.category}>
                    <option value="">
                    {
                        cats.map((cat, index) => {
                            return (
                                <div key={index}>
                                    <td>{cat.name}</td>
                                    
                                    
                                    
                                    
                                </div>
                            )
                        })
                    }
                    </option>
                   </select>
                  </div> */}

                  {/* For Image */}


                  {/* <div className=' offset-sm-4'>
                    <img src={"http://212.111.80.94/products" + initialData.image} alt="" />
                  </div> */}

                  <div className=' '>
                    <label className=' text-center text-lg col-span-6'>Choose Image</label>
                    <input
                    className=' col-span-5 border-none blue'
                    type="file"
                    name="image"
                    
                    onChange={handleFileChange}
                    />
                  
                    <div>
                        {
                        productData.image && <img src={`http://212.111.80.94/uploads/${productData.image}`} alt='Product Img' width="100" />}
                    </div>
                  </div>

                  <div className=''>
                    <div className=''>
                        <button type="submit">Edit Product</button>
                    </div>
                    <div>
                      <Link to="/admin/products">Cancel</Link>
                    </div>
                  </div>
                    
              </div>
              
        
      </form>
       
          </div>
        </div>
        
      </div>
    
    </>
    );
};

export default EditProduct;



// import { Link, useNavigate } from "react-router-dom";

// export default function CreateProduct() {

//     const navigate = useNavigate()

//     async function handleSubmit(event) {
//         event.preventDefault()

//         const formData = new FormData(event.target)
//         const product = Object.fromEntries(formData.entries())

//         if(!product.name || !product.brand || !product.category || !product.price  
//             || !product.description || !product.image.name) {
//                 alert("Please fill all the fields")
//                 return
//             }

//           try {
//             const response = await fetch("http://212.111.80.94/", {
//                 method: "POST",
//                 body: formData
//             })

//             const data = await response.json()

//             if( response.ok) {
//                 //Product created correctly!

//                 navigate("/admin/products")
//             }
//             else if (response.status === 400) {
//                 alert("Validation errors")
//             }
//             else {
//                 alert("Unable to create the product")
//             }
//           }
//           catch(error) {
//             alert("Unable to connect to the server!")
//           }
            
//     }
// return (
//     <div className="container my-4">
//         <div className=" row">
//             <div className=" col-md-8 mx-auto rounded border p-4">
//                 <h2 className=" text-center mb-5">Create Product</h2>

//                 <form onSubmit={handleSubmit}>
//                     <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">Name</label>
//                         <div className="col-sm-8">
//                             <input type="text" className="form-control" name="name" />
//                             <span className=" text-red-600"></span>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">Brand</label>
//                         <div className="col-sm-8">
//                             <input type="text" className="form-control" name="brand" />
//                             <span className=" text-red-600"></span>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">Category</label>
//                         <div className="col-sm-8">
//                             <select className="form-select" name="category">
//                                 <option value="Vaccines">Vaccines</option>
//                                 <option value="Ampulas">Ampulas</option>
//                                 <option value="Apparatus">Apparatus</option>
//                                 <option value="Accessories">Accessories</option>
//                                 <option value="Food">Food</option>
//                                 <option value="Other">Other</option>
//                             </select>
//                             <span className=" text-red-600"></span>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">Price</label>
//                         <div className="col-sm-8">
//                             <input className="form-control" name="price" type="number" step="0.01" min="1"/>
//                             <span className=" text-red-600"></span>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">Description</label>
//                         <div className="col-sm-8">
//                             <textarea className="form-control" name="description" rows="4"></textarea>
//                             <span className=" text-red-600"></span>
//                         </div>
//                     </div>

//                     <div className="row mb-3">
//                         <label className="col-sm-4 col-form-label">Image</label>
//                         <div className="col-sm-8">
//                             <input className="form-control" name="image" type="file" />
//                             <span className=" text-red-600"></span>
//                         </div>
//                     </div>

//                     <div className="row">
//                         <div className=" offset-sm-4 col-sm-4 d-grid">
//                             <button type="submit" className="btn bg-blue-500">Submit</button>
//                         </div>
//                         <div className="col-sm-4 d-grid">
//                             <Link className="btn bg-gray-400" to="/admin/products" role="button">Cancel</Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// )
// }

