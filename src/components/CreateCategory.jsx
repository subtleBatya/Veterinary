// CreateBrand.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_URL} from '../api/BrandApi'

const CreateCategory = () => {
  const [categoryData, setCategoryData] = useState({
    name: '',
    name_ru: '',
    name_en: '',
    // image: null, // Add a field to store the image
  });

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(`http://212.111.80.94/categories`); // HERE WE USE AXIOS
        console.log(response.data);
        setCategoryData({
        //   id: response.data._id,
          name: response.data.name || '', // Default to an empty string if undefined
          // name_ru: response.data.name_ru || '',
          // name_en: response.data.name_en || '',
          
        //   description: response.data.description || '',
          // image: null,
        });
      } catch (error) {
        console.error('Error fetching brand details:', error);
      }
    };

    getCategory();
  }, []);

  const handleChange = (e) => {
    
      setCategoryData({
        ...categoryData,
        [e.target.name]: e.target.value, // For other fields
      });
    
  };

  // const handleFileChange = (e) => {
  //   setCategoryData({
  //     ...categoryData,
  //     image: e.target.files[0], // Store the selected image file
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', categoryData.name);
    formData.append('name_ru', categoryData.name_ru);
    formData.append('name_en', categoryData.name_en);
    // formData.append('description', categoryData.description);
    // if (categoryData.image) {
    //   formData.append('category-photo', categoryData.image); // Append the image to the form data. The 'brand-photo' here should match the input field's name element
    // }

    try {
      const response = await axios.post(`${API_URL}/secret/category/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Brand created successfully:', response.data);
    } catch (error) {
      console.error('Error creating brand:', error.response?.data || error.message);
    }
  };

  return (
    <>
    <div className=' '>
      <form onSubmit={handleSubmit} encType='multipart/form-data' className=' mt-12 create_container border-blue-500/50 border-3 rounded' >
        
        <div className=' m-4 space-y-4'>
          {/* <div className=' space-x-4 flex align-middle text-center' >
            <div className=' text-xl'>Category:</div>
              <input
                className=' outline-blue-500/50 indent-2 text-black w-full'
                type="text"
                name="name"
                placeholder="Category Name"
                value={categoryData.name}
                onChange={handleChange}
                required
              />
          </div> */}
          
          <div className='   justify-center  '>
                    <label className=' text-center text-lg me-2'>Name</label>
                    <input
                    className=' border-none blue'
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      value={categoryData.name}
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
                      value={categoryData.name_ru}
                      onChange={handleChange}
                      
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
                      value={categoryData.name_en}
                      onChange={handleChange}
                      
                    />
                  </div>
          {/* <div className='space-x-4 flex  align-middle text-center'>
            <div className=' text-xl'>Description:</div>
            <textarea
              className=' outline-blue-500/50 indent-2 w-full'
              name="description"
              placeholder="Description"
              value={categoryData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div> */}
          {/* <div className=' flex '>
            <div className=' text-xl'>Choose Image: </div>
            <div> 
              <input
                className=' text-gray-400 w-full'
                type="file"
                name="category-photo"
                onChange={handleFileChange} // Handle image file selection
              />
            </div>
            
          </div> */}
          <div className=' mt-3'>
            <button type="submit" className=' text-white rounded-md p-2 bg-blue-500'>Create Category</button>
          </div>
        </div>
          
        
      </form>
    </div>
    
    </>
  );
};

export default CreateCategory;


// // src/components/CreateBrand.js
// import React, { useState } from 'react';
// import { createBrand } from '../api/BrandApi';

// const CreateBrand = () => {
//     const [name, setName] = useState('');
//     const [image, setImage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const newBrand = { name };
//             await createBrand(newBrand);
//             setName('');
//             setImage('');
//         } catch (error) {
//             console.error('Error creating brand:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Brand Name"
//                 required
//             />
//             <input
//                 type="file"
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//                 placeholder="Image URL"
//                 required
//             />
//             <button type="submit">Create Brand</button>
//         </form>
//     );
// };

// export default CreateBrand;






// import React, {useState} from 'react';
// import { createCategory } from '../api/CategoryApi';

// const CreateCategory = () => {
//     const [name, setName] = useState('');
//     const [image, setImage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const newCategory = {name, image};
//             await createCategory(newCategory);
//             setName('');
//             setImage('');
//         } catch (error) {
//             console.error('ERror creating category:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}

//             placeholder='Category Name'
//             required
//             />
//             <input 
//             type="text"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             placeholder='Image URL'
//             required
//             />
//             <button type='submit'>Create Category</button>
//         </form>
//     );
// };

// export default CreateCategory;