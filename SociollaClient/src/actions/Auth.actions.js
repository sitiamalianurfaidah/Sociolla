import axios from 'axios';

const backend_URI = 'http://localhost:5000';

// Helper function for base API response structure
const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
    };

    // Login User
    export const loginUser = async (input) => {
    try {
        const response = await axios.post(`${backend_URI}/user/login`, input);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Register User
    export const signUpUser = async (input) => {
    try {
        const response = await axios.post(`${backend_URI}/user/register`, input);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};
