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

export const uploadPlanilha = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await api.post("/products/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data; // Retorna a resposta do backend
  } catch (error) {
    console.error("Erro ao enviar arquivo:", error);
    throw error;
  }
};


