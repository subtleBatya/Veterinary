// src/components/CreateBrand.js
import React, { useState } from 'react';
import { createBrand } from '../api/BrandApi';

const CreateBrand = () => {
    const [name, setName] = useState('');
    // const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newBrand = { name }; // su taydan image ayyrdym, yokardaky 
            await createBrand(newBrand);
            setName('');
            // setImage('');
        } catch (error) {
            console.error('Error creating brand:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Brand Name"
                required
            />
            {/* <input
                type="file"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                required
            /> */}
            <button type="submit">Create Brand</button>
        </form>
    );
};

export default CreateBrand;