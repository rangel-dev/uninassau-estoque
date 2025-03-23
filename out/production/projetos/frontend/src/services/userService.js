import api from './api';

export async function createUser(data) {
  const token = localStorage.getItem("token");

  return api.post('/user/create', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
