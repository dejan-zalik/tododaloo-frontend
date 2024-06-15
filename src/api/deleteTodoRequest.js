import { API_URL } from './config';

const deleteTodoRequest = async (todo) => {
  const response = await fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return await response.json();
};

export default deleteTodoRequest;
