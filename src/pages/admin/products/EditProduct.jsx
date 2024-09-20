// CreateProduct.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../api/BrandApi';


const EditProduct = () => {

  const params = useParams()
  const [initialData, setInitialData] = useState()
  const navigate = useNavigate()

    function getProduct() {
        fetch("http://212.111.80.94/products/" + params.id)
        .then(response => {
            if (response.ok) {
            return response.json()
        }
        
        throw new Error()
    })
    .then(data => {
        setInitialData(data)
    })
    .catch(error => {
        alert("Harydyn detallaryny okap bilenok")
    })
    
}

useEffect(getProduct, [])
  //   Try this with Axios later now do it with fetch API


//   function getProduct() {
//     try{
//     const response = axios.get("http://212.111.80.94/products" + params.id)
//     console.log('Product fetched successfully:', response.data)}
//   catch (error) {
//         console.error('Error fetching product:', error);
//       }
// }

  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: null,
  });

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
      formData.append('image', productData.image);
    }

    try {
      const response = await axios.patch(`${API_URL}/secret/brand`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product created successfully:', response.data);
      navigate("/admin/products")
      // Optionally, redirect to products page or clear the form
    } catch (error) {
      console.error('Error creating product:', error);
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
                    defaultValue={params.id}
                    />
            </div>
            {
                initialData &&
            <form onSubmit={handleSubmit} className=' justify-center '>
        
              <div className=' w-[1/2] '>
                    {/* For Name Input */}
                  <div className='   justify-center  '>
                    <label className=' text-center text-lg me-2'>Name</label>
                    <input
                    defaultValue={initialData.name}
                    className=' border-none blue'
                      type="text"
                      name="name"
                      
                      
                      
                      required
                    />
                  </div>

                  {/* For Brand Input */}
                  <div className='   justify-center  '>
                    <label className=' text-center text-lg me-2'>Brand</label>
                    <input
                    defaultValue={initialData.brand}
                    className=' border-none blue'
                      type="text"
                      name="name"
                      
                      
                      
                      required
                    />
                  </div>
                  
                  {/* For Price Input */}
                  <div className=' justify-center  '>
                    <label className=' text-lg me-2'>Price</label>
                    <input
                    className='  border-none blue'
                    defaultValue={initialData.price}
                    type="number"
                    name="price"
                    
                    
                    required
                  />
                  </div>
                  
                  {/* For Description */}

                  <div className=' justify-center  '>
                    <label className=' text-center text-lg col-span-6'>Description</label>
                    <textarea
                    className='  outline-blue-500'
                    
                    name="description"
                    
                    required
                  ></textarea>
                  </div>    

                  {/* For Category */}
                  
                  <div className='   '>
                    <label className=' text-center text-lg col-span-6'>Category</label>
                   <select name="category" id="" defaultValue={initialData.category}>
                    <option value="">

                    </option>
                   </select>
                  </div>

                  {/* For Image */}


                  <div className=' offset-sm-4'>
                    <img src={"http://212.111.80.94/products" + initialData.image} alt="" />
                  </div>

                  <div className=' '>
                    <label className=' text-center text-lg col-span-6'>Image</label>
                    <input
                    className=' col-span-5 border-none blue'
                    type="file"
                    name="image"
                    placeholder="Image"
                    value={productData.image}
                    onChange={handleChange}
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
       }
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

