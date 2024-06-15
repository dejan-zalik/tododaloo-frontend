import { API_URL } from './config';

const createTodoRequest = async (todo) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: todo.text,
      completed: false,
      userId: todo.userId,
    }),
    credentials: 'include',
  });
  return await response.json();
};

export default createTodoRequest;
