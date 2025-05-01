import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

// Helper function for base API response structure
const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
    };

    // Create Store
    export const createStore = async (input) => {
    try {
        const response = await axios.post(`${API}/store/create`, input);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Get All Stores
    export const getAllStores = async () => {
    try {
        const response = await axios.get(`${API}/store/getAll`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Get Store by ID
    export const getStoreById = async (id) => {
    try {
        const response = await axios.get(`${API}/store/${id}`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Update Store
    export const updateStore = async (input) => {
    try {
        const response = await axios.put(`${API}/store`, input);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Delete Store
    export const deleteStore = async (id) => {
    try {
        const response = await axios.delete(`${API}/store/${id}`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};
