import { API_URL } from './config';

const registerUserRequest = async (user) => {
  const response = await fetch(`${API_URL}/registerpage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
    }),
    credentials: 'include',
  });
  if (response.ok) {
    return await response.json();
  } else {
    await response.json().then((data) => {
      throw new Error(data.message);
    });
  }
};

export default registerUserRequest;
