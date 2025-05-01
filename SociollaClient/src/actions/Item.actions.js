import axios from 'axios';

const backend_URI = 'http://localhost:5000';

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

        const response = await axios.post(`${backend_URI}/item/create`, formData, {
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
        const response = await axios.get(`${backend_URI}/item`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Get Item by ID
    export const getItemById = async (id) => {
    try {
        const response = await axios.get(`${backend_URI}/item/byId/${id}`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Jika ingin menambahkan `getItemsByStoreId` di `Item.actions.js`
    export const getItemsByStoreId = async (storeId) => {
        try {
            const response = await axios.get(`${backend_URI}/item/byStoreId/${storeId}`);
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

        const response = await axios.put(`${backend_URI}/item`, formData, {
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
        const response = await axios.delete(`${backend_URI}/item/${id}`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};
