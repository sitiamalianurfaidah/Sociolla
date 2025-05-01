import axios from 'axios';

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
        const response = await axios.post(`/user/login`, input); // ✅ proxy akan terusin ke localhost:5000
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const signUpUser = async (input) => {
    try {
        const response = await axios.post(`/user/register`, input); // ✅ sama di sini
        if (response.status === 201) {
            return baseApiResponse(response.data.payload, true);
        } else {
            return baseApiResponse(null, false);
        }
    } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : error);
        return baseApiResponse(null, false);
    }
};
