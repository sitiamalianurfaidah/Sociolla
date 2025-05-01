import axios from 'axios';

const backend_URI = 'http://localhost:5000';

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
    const response = await axios.get(`${backend_URI}/user/${email}`);
    return baseApiResponse(response.data.payload, true);
  } catch (error) {
    console.error(error);
    return baseApiResponse(null, false);
  }
};

// Update User
export const updateUser = async (input) => {
  try {
    const response = await axios.put(`${backend_URI}/user`, input);
    return baseApiResponse(response.data.payload, true);
  } catch (error) {
    console.error(error);
    return baseApiResponse(null, false);
  }
};

// Delete User
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${backend_URI}/user/${id}`);
    return baseApiResponse(response.data.payload, true);
  } catch (error) {
    console.error(error);
    return baseApiResponse(null, false);
  }
};

// Top Up User Balance
export const topUpBalance = async (input) => {
  try {
    const response = await axios.post(`${backend_URI}/user/topUp`, input);
    return baseApiResponse(response.data.payload, true);
  } catch (error) {
    console.error(error);
    return baseApiResponse(null, false);
  }
};
