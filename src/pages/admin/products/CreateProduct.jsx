// CreateProduct.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../api/BrandApi';
import axios from 'axios';



const CreateProduct = () => {
  const navigate = useNavigate()
  const [brands, setBrands] = useState([]);
  const [cats, setCats] = useState([]);
  const [subCats, setSubCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const brandsResponse = await axios.get(`${API_URL}/brands`);
        setBrands(brandsResponse.data);
  
        const categoriesResponse = await axios.get(`${API_URL}/categories`);
        setCats(categoriesResponse.data);

        const subsResponse = await axios.get(`${API_URL}/subcategories`);
        setSubCats(subsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
    // useEffect(() => {
    //     const fetchBrands = async () => {
    //       try {
    //         const response = await axios.get(`${API_URL}/brands`);
    //         setBrands(response.data);
    //       } catch (error) {
    //         console.error('Error fetching Cats:', error);
    //       }
    //     };
    
    //     fetchBrands();
    //   }, []);
  


    // useEffect(() => {
    //     const fetchCats = async () => {
    //       try {
    //         const response = await axios.get(`${API_URL}/categories`);
    //         setCats(response.data);
    //       } catch (error) {
    //         console.error('Error fetching Cats:', error);
    //       }
    //     };
    
    //     fetchCats();
    //   }, []);

  const [productData, setProductData] = useState({
    name: '',
    name_ru: '',
    name_en: '',
    price: '',
    description: '',
    description_ru: '',
    description_en: '',
    brand: '',
    category: '',
    subcategory: [],
    image: null,
  });

  // const handleChange = (e) => {
  //   setProductData({
  //     ...productData,
  //     [e.target.name]: e.target.value,

  //   });
  // };

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
  
    if (type === 'select-multiple') {
      // Handle multiple selections for subcategories
      const selectedValues = Array.from(selectedOptions, (option) => option.value);
      setProductData({
        ...productData,
        [name]: selectedValues,
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
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
    formData.append('name_ru', productData.name_ru);
    formData.append('name_en', productData.name_en);
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    formData.append('description_ru', productData.description_ru);
    formData.append('description_en', productData.description_en);
    formData.append('brand_id', productData.brand);
    formData.append('category_id', productData.category);
    
    productData.subcategory.forEach((subCat) => {
      formData.append('subcategory_id[]', subCat);
    });
  
    if (productData.image) {
      formData.append('product-photo', productData.image);
    }

    try {
      const response = await axios.post(`${API_URL}/secret/product`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product created successfully:', response.data);
      navigate("/Veterinary/admin/products")
      // Optionally, redirect to products page or clear the form
    } catch (error) {
      // if (error.response) {
      //   console.error('Server responded with an error:', error.response.data);
      //   alert('Error: ' + error.response.data.message);
      // } else {
      //   console.error('Error creating product:', error.message);
      //   alert('Yalnyslyk doredi: Harydy doredip bilenok');
      // }
      console.error('Error creating product:', error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className=' container my-4'>
        <div className='row '>
          <div className='  md:col-span-8  rounded border '>
            <h2 className=' text-center mb-5'>Create Product</h2>

            <form onSubmit={handleSubmit} encType='multipart/form-data' className=' justify-center '>
        
              <div className=' w-[1/2] '>
                    {/* For Name Input */}
                  <div className='   justify-center  '>
                    <label className=' text-center text-lg me-2'>Name</label>
                    <input
                    className=' border-none blue'
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      value={productData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* For Name Input RU */}
                  <div className='   justify-center  '>
                    <label className=' text-center text-lg me-2'>Name_ru</label>
                    <input
                    className=' border-none blue'
                      type="text"
                      name="name_ru"
                      placeholder="Product Name"
                      value={productData.name_ru}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* For Name Input EN */}
                  <div className='   justify-center  '>
                    <label className=' text-center text-lg me-2'>Name_en</label>
                    <input
                    className=' border-none blue'
                      type="text"
                      name="name_en"
                      placeholder="Product Name"
                      value={productData.name_en}
                      onChange={handleChange}
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
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={productData.price}
                    onChange={handleChange}
                    required
                  />
                  </div>
                  
                  {/* For Description */}

                  <div className=' justify-center  '>
                    <label className=' text-center text-lg col-span-6'>Description</label>
                    <textarea
                    className='  outline-blue-500'
                    name="description"
                    placeholder="Description"
                    value={productData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                  </div>    

                   {/* For Description RU*/}

                   <div className=' justify-center  '>
                    <label className=' text-center text-lg col-span-6'>Description</label>
                    <textarea
                    className='  outline-blue-500'
                    name="description_ru"
                    placeholder="Description_ru"
                    value={productData.description_ru}
                    onChange={handleChange}
                    required
                  ></textarea>
                  </div>  


                   {/* For Description EN*/}

                   <div className=' justify-center  '>
                    <label className=' text-center text-lg col-span-6'>Description</label>
                    <textarea
                    className='  outline-blue-500'
                    name="description_en"
                    placeholder="Description_en"
                    value={productData.description_en}
                    onChange={handleChange}
                    required
                  ></textarea>
                  </div>   

                  {/* For Category */}
                  
                  <div className='   '>
                    <label className=' text-center text-lg col-span-6'>Category</label>
                    <select name="category" value={productData.category} onChange={handleChange} required>
                        <option value="" disabled>Select a category</option>
                        {cats.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                            {cat.name}
                        </option>
                        ))}
                    </select>
                  </div>

                  {/* For SubCategory */}
                  
                  <div className=''>
                    <label className='text-center text-lg col-span-6'>Subcategory</label>
                    <select
                      name="subcategory"
                      value={productData.subcategory}
                      onChange={handleChange}
                      multiple
                      required
                    >
                      <option value="" disabled>Select subcategories</option>
                      {subCats.map((subCat) => (
                        <option key={subCat._id} value={subCat._id}>
                          {subCat.name}
                        </option>
                      ))}
                    </select>
                </div>

                 {/* For Image */}

                   <div className='   '>
                    <label className=' text-center text-lg col-span-6'>Image</label>
                    <input
                    className=' col-span-5 border-none blue'
                    type="file"
                    name="product-photo"
                    placeholder="Image"
                   
                    onChange={handleFileChange}
                    required
                  />
                  </div>

                  <div className=''>
                    <div className=''>
                        <button type="submit">Create Product</button>
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

export default CreateProduct;



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

