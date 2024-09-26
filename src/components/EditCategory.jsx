// EditBrand.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../api/CategoryApi'

const EditCategory = () => {

  const { id } = useParams(); // HERE 
  const navigate = useNavigate();
//   const params = useParams()
  const [brandData, setBrandData] = useState({
    // id: '',
    name: '',
    // description: '',
    image: null, // Add a field to store the image
  });

//   const [image, setImage] = useState(null);

  // Fetch the brand details when the component mounts
  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get(`http://212.111.80.94/category/${id}`); // HERE WE USE AXIOS
        console.log(response.data);
        setBrandData({
        //   id: response.data._id,
          name: response.data.name || '', // Default to an empty string if undefined
        //   description: response.data.description || '',
          image: null,
        });
      } catch (error) {
        console.error('Error fetching brand details:', error);
      }
    };

    fetchBrand();
  }, [id]);


//   function getBrand() {
//     fetch("http://212.111.80.94/brands/" + params.id)
//     .then(response => {
//         if (response.ok) {
//         return response.json()
//     }
    
//     throw new Error()
// })
// .then(data => {
//     setInitialData(data)
// })
// .catch(error => {
//     alert("Harydyn detallaryny okap bilenok")
// })

// }

// useEffect(getBrand, [])

  const handleChange = (e) => {
    setBrandData({
      ...brandData,
      [e.target.name]: e.target.value,
    });
  };

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

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
    // formData.append('description', brandData.description);
    if (brandData.image) {
      formData.append('category-photo', brandData.image); // Append the image to the form data. The 'brand-photo' here should match the input field's name element
    }

    try {
      const response = await axios.patch(`${API_URL}/secret/category/${id}`, formData, { // HERE 
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Brand created successfully:', response.data);
      navigate('/brands');
    } catch (error) {
      console.error('Error creating brand:', error.response?.data || error.message);
    }
  };

  return (
    <>
    <div className=' '>

    <h2 className=' text-center mb-5'>Edit Category</h2>

<div className='   justify-center  '>
        <label className=' text-center text-lg me-2'>ID</label>
        <input
        readOnly
        className=' border-none blue form-control-plaintext'
        defaultValue={brandData.id}
        />
</div>
      <form onSubmit={handleSubmit} encType='multipart/form-data' className=' mt-12 create_container border-blue-500/50 border-3 rounded' >
        
        <div className=' m-4 space-y-4'>
          <div className=' space-x-4 flex align-middle text-center' >
            <label className=' text-xl'>Category:</label>
              <input
                className=' border-blue-500/50 outline-blue-500/50 indent-2 w-full'
                type="text"
                name="name"
                // readOnly
                value={brandData.name || ''}
                onChange={handleChange}
                required
              />
          </div>
          {/* <div className='space-x-4 flex  align-middle text-center'>
            <div className=' text-xl'>Description:</div>
            <textarea
              className=' outline-blue-500/50 indent-2 w-full'
              name="description"
              value={brandData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div> */}
          <div className=' flex '>
            <label className=' text-xl'>Choose Image: </label>
            <div> 
              <input
                className=' text-gray-400 w-full'
                type="file"
                name="image"
                onChange={handleFileChange}
                
                // onChange={handleFileChange} // Handle image file selection
              />
              <div>
                {
                brandData.image && <img src={`http://212.111.80.94/uploads/${brandData.image}`} alt='Brand logo' width="100" />}
              </div>
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

export default EditCategory;


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