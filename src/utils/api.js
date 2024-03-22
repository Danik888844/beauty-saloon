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