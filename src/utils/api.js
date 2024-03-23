import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Адрес сервера Node.js

// Получение данных из таблицы "masters"
export const getAllMasters = async () => {
  try {
    const response = await axios.get(`${API_URL}/masters`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
    throw error;
  }
};