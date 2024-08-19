import React, {useState} from 'react';
import { createCategory } from '../api/CategoryApi';

const CreateCategory = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newCategory = {name, image};
            await createCategory(newCategory);
            setName('');
            setImage('');
        } catch (error) {
            console.error('ERror creating category:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}

            placeholder='Category Name'
            required
            />
            <input 
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder='Image URL'
            required
            />
            <button type='submit'>Create Category</button>
        </form>
    );
};

export default CreateCategory;