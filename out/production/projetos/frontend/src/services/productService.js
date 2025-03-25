// src/services/productService.js
import api from './api'; // Importa a instância do axios configurada

// Exportação nomeada correta
export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

