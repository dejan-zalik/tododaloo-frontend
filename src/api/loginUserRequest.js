import { API_URL } from './config';

const loginUserRequest = async (user) => {
  const response = await fetch(`${API_URL}/loginpage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
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

export default loginUserRequest;
