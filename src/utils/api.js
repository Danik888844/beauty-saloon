import axios from 'axios';

const API_URL = 'http://localhost:5001'; // Адрес сервера Node.js

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

export const getBookingsByEmail = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/bookingsByEmail`, {
      params: {
        email: email
      }
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
};

export const addBooking = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/addBooking`, userData);
    return response.data;
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
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

export const changePassword = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}/changePassword`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при изменении пароля:', error);
    throw error;
  }
};