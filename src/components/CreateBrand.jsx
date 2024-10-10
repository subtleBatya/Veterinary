// CreateBrand.jsx
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../api/BrandApi";
import { PhotoIcon } from "@heroicons/react/24/solid";
const CreateBrand = () => {
  const [brandData, setBrandData] = useState({
    name: "",
    description: "",
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
    formData.append("name", brandData.name);
    // formData.append('description', brandData.description);
    if (brandData.image) {
      formData.append("brand-photo", brandData.image); // Append the image to the form data. The 'brand-photo' here should match the input field's name element
    }

    try {
      const response = await axios.post(`${API_URL}/secret/brand`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Brand created successfully:", response.data);
    } catch (error) {
      console.error(
        "Error creating brand:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      {/* <div className=' '>
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
          {/* <div className='space-x-4 flex  align-middle text-center'>
            <div className=' text-xl'>Description:</div>
            <textarea
              className=' outline-blue-500/50 indent-2 w-full'
              name="description"
              placeholder="Description"
              value={brandData.description}
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
                name="brand-photo"
                onChange={handleFileChange} // Handle image file selection
              />
            </div> */}

      {/* </div>
          <div className=' mt-3'>
            <button type="submit" className=' text-white rounded-md p-2 bg-blue-500'>Create Brand</button>
          </div>
        </div>
          
        
      </form>
    </div> */}
      <form>
        <div className="space-y-12">
          <div className="py-4">
            <div className="">
              <div className="flex justify-center gap-4">
                <div className="">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-[280px] rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 pt-3">
                <div className="">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-[280px] rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 pt-3">
                <div className="w-[280px]">
                  <label
                    htmlFor="cover-photo"
                    className="block text-center text-sm font-medium leading-6 text-gray-900"
                  >
                    Upload photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25">
                    <div className="text-center">
                      <PhotoIcon
                        aria-hidden="true"
                        className="mx-auto h-12 w-12 text-gray-300"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
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
