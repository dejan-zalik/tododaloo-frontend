import { API_URL } from './config';

const readTodosRequest = async () => {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return await response.json();
};

export default readTodosRequest;
