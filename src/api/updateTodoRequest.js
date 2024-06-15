import { API_URL } from './config';

const updateTodoRequest = async (todo) => {
  const response = await fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: todo.text,
      completed: todo.completed,
    }),
    credentials: 'include',
  });
  return await response.json();
};

export default updateTodoRequest;
