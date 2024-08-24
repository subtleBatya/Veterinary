import axios from 'axios'
const API_URL = 'http://212.111.80.94';

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        return response.data
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const createCategory = async (categoryData) => {
    try {
        const response = await axios.post(`${API_URL}/secret/category`, categoryData);
        return response.data;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
};

export const updateCategory = async (id, categoryData) => {
    try {
        const response = await axios.put(`${API_URL}/secret/category/${id}`, categoryData);
        return response.data;
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
};

export const deleteCategory = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/secret/category/${id}`); 
        // categoryDate ayyrdym branda yok eken
        return response.data;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
};