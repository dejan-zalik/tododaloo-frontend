import { API_URL } from './config';

const logoutUserRequest = async () => {
  const response = await fetch(`${API_URL}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  return await response.json();
};

export default logoutUserRequest;
