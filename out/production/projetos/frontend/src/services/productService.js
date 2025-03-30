import api from './api'; // Importa a instância do axios configurada

// Função para buscar todos os produtos
export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Função para fazer o upload de planilha
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

// Função para criar um novo produto
export const createProduct = async (product) => {
  try {
    const response = await api.post('/products/register', product); // Endpoint para criar produtos
    return response.data; // Retorna o produto criado
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
};

// Função para buscar um produto pelo ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`); // Endpoint para buscar produto pelo ID
    return response.data; // Retorna os dados do produto
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    throw error;
  }
};

// Função para atualizar um produto
export const updateProduct = async (id, product) => {
  try {
    const response = await api.put(`/products/update/${id}`, product); // Endpoint para atualizar produto
    return response.data; // Retorna os dados do produto atualizado
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
};

// Função para deletar um produto
export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/delete/${id}`); // Endpoint para deletar produto
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    throw error;
  }
};

