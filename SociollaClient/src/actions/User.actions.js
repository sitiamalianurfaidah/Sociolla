import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

// Helper function for base API response structure
const baseApiResponse = (data, isSuccess) => {
  return {
    success: isSuccess,
    data: data || null,
  };
};

// Get User by Email
export const getUser = async (email) => {
  try {
    const response = await axios.get(`${API}/user/${email}`);
    return baseApiResponse(response.data.payload, true);
  } catch (error) {
    console.error(error);
    return baseApiResponse(null, false);
  }
};

// Update User
export const updateUser = async (input) => {
  try {
    const response = await axios.put(`${API}/user`, input);
    return baseApiResponse(response.data.payload, true);
  } catch (error) {
    console.error(error);
    return baseApiResponse(null, false);
  }
};

// Delete User
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API}/user/${id}`);
    return baseApiResponse(response.data.payload, true);
  } catch (error) {
    console.error(error);
    return baseApiResponse(null, false);
  }
};

// Top Up User Balance
export const topUpBalance = async (input) => {
  try {
    const response = await axios.post(`${API}/user/topUp`, input);
    return baseApiResponse(response.data.payload, true);
  } catch (error) {
    console.error(error);
    return baseApiResponse(null, false);
  }
};
