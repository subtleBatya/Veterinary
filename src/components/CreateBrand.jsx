// CreateBrand.jsx
import React, { useState } from 'react';
import axios from 'axios';
import {API_URL} from '../api/BrandApi'

const CreateBrand = () => {
  const [brandData, setBrandData] = useState({
    name: '',
    description: '',
    image: null, // Add a field to store the image
  });

  const handleChange = (e) => {
    setBrandData({
      ...brandData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setBrandData({
      ...brandData,
      image: e.target.files[0], // Store the selected image file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', brandData.name);
    formData.append('description', brandData.description);
    if (brandData.image) {
      formData.append('brand-photo', brandData.image); // Append the image to the form data. The 'brand-photo' here should match the input field's name element
    }

    try {
      const response = await axios.post(`${API_URL}/secret/brand`, formData, {
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
          <div className=' space-x-4 flex align-middle text-center' >
            <div className=' text-xl'>Brand:</div>
              <input
                className=' outline-blue-500/50 indent-2 text-black w-full'
                type="text"
                name="name"
                placeholder="Brand Name"
                value={brandData.name}
                onChange={handleChange}
                required
              />
          </div>
          <div className='space-x-4 flex  align-middle text-center'>
            <div className=' text-xl'>Description:</div>
            <textarea
              className=' outline-blue-500/50 indent-2 w-full'
              name="description"
              placeholder="Description"
              value={brandData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className=' flex '>
            <div className=' text-xl'>Choose Image: </div>
            <div> 
              <input
                className=' text-gray-400 w-full'
                type="file"
                name="brand-photo"
                onChange={handleFileChange} // Handle image file selection
              />
            </div>
            
          </div>
          <div className=' mt-3'>
            <button type="submit" className=' text-white rounded-md p-2 bg-blue-500'>Create Brand</button>
          </div>
        </div>
          
        
      </form>
    </div>
    
    </>
  );
};

export default CreateBrand;


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