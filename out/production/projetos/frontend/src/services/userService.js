import api from './api';

export async function createUser(data) {
  return api.post('/user/create', data);
}
