
import api from './api';

export async function createUser(userData) {
  try {
    const response = await api.post('/user/create', userData, {
      headers: {
        'Content-Type': 'application/json'
      }

    });
    return response.data;
  } catch (error) {
    console.error('Error in createUser:', error);
    throw error;
  }
}