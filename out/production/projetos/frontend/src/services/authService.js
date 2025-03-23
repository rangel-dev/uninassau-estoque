import api from '../services/api';

// Faz login com email e senha
export async function login(credentials) {
  try {
    const response = await api.post('/auth/login', credentials);

    // Armazena o token no localStorage
    localStorage.setItem('token', response.data.token);

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Erro ao fazer login" };
  }
}

// Cadastra um novo usuário
export async function register(data) {
  return api.post('/user/create', data);
}

// Remove o token do localStorage
export function logout() {
  localStorage.removeItem('token');
}

// Verifica se há token salvo
export function isAuthenticated() {
  return !!localStorage.getItem('token');
}
