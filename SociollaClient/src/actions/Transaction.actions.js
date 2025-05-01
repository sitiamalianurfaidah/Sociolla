import axios from 'axios';

const backend_URI = 'http://localhost:5000';

// Helper function for base API response structure
const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
    };

    // Create Transaction
    export const createTransaction = async (input) => {
    try {
        const response = await axios.post(`${backend_URI}/transaction/create`, input);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Pay Transaction
    export const payTransaction = async (input) => {
    try {
        const response = await axios.post(`${backend_URI}/transaction/pay`, input);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Get All Transactions
    export const getAllTransactions = async () => {
    try {
        const response = await axios.get(`${backend_URI}/transaction`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
    };

    // Delete Transaction
    export const deleteTransaction = async (id) => {
    try {
        const response = await axios.delete(`${backend_URI}/transaction/${id}`);
        return baseApiResponse(response.data.payload, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};
