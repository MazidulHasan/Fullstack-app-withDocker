import axios from 'axios';

// Backend API URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Get all items
export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/items/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Create a new item
export const createItem = async (itemData) => {
  try {
    const response = await axios.post(`${API_URL}/items/`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};