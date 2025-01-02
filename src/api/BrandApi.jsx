// src/api/brandApi.js
import axios from 'axios';

export const API_URL = 'http://212.111.80.94:3000'; // Replace with your backend URL

export const getAllBrands = async () => {
    try {
        const response = await axios.get(`${API_URL}/brands`);
        return response.data;
    } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
    }
};

export const createBrand = async (brandData) => {
    try {
        const response = await axios.post(`${API_URL}/secret/brand`, brandData);
        return response.data;
    } catch (error) {
        console.error('Error creating brand:', error);
        throw error;
    }
};

export const updateBrand = async (id, brandData) => {
    try {
        const response = await axios.put(`${API_URL}/secret/brand/${id}`, brandData);
        return response.data;
    } catch (error) {
        console.error('Error updating brand:', error);
        throw error;
    }
};

export const deleteBrand = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/secret/brand/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting brand:', error);
        throw error;
    }
};