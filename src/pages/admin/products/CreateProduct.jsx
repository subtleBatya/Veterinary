// CreateProduct.jsx
import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
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
      const response = await axios.post('http://212.111.80.94/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product created successfully:', response.data);
      // Optionally, redirect to products page or clear the form
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={productData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={productData.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={productData.description}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={productData.category}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="image"
        onChange={handleFileChange}
      />
      <button type="submit">Create Product</button>
    </form>
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
