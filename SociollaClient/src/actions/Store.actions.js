import axios from 'axios';

const backend_URI = 'http://localhost:5000';

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
        const response = await axios.post(`${backend_URI}/store/create`, input);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Get All Stores
    export const getAllStores = async () => {
    try {
        const response = await axios.get(`${backend_URI}/store/getAll`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Get Store by ID
    export const getStoreById = async (id) => {
    try {
        const response = await axios.get(`${backend_URI}/store/${id}`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Update Store
    export const updateStore = async (input) => {
    try {
        const response = await axios.put(`${backend_URI}/store`, input);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Delete Store
    export const deleteStore = async (id) => {
    try {
        const response = await axios.delete(`${backend_URI}/store/${id}`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};
