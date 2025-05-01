import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

// Helper function for base API response structure
const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
    };

    // Create Item
    export const createItem = async (input, image) => {
    try {
        const formData = new FormData();
        formData.append('image', image);
        for (const key in input) {
        formData.append(key, input[key]);
        }

        const response = await axios.post(`${API}/item/create`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Get All Items
    export const getItems = async () => {
    try {
        const response = await axios.get(`${API}/item`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Get Item by ID
    export const getItemById = async (id) => {
    try {
        const response = await axios.get(`${API}/item/byId/${id}`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Jika ingin menambahkan `getItemsByStoreId` di `Item.actions.js`
    export const getItemsByStoreId = async (storeId) => {
        try {
            const response = await axios.get(`${API}/item/byStoreId/${storeId}`);
            return baseApiResponse(response.data.payload, true);
        } catch (error) {
            console.error(error);
            return baseApiResponse(null, false);
        }
    };


    // Update Item
    export const updateItem = async (input, image) => {
    try {
        const formData = new FormData();
        formData.append('image', image);
        for (const key in input) {
        formData.append(key, input[key]);
        }

        const response = await axios.put(`${API}/item`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Delete Item
    export const deleteItem = async (id) => {
    try {
        const response = await axios.delete(`${API}/item/${id}`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};
