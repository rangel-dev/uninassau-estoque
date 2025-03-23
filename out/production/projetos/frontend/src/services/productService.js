// src/services/productService.js
import api from '../services/api';

export async function getAllProducts() {
  const response = await api.get('/products');
  return response.data;
}
