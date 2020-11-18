const BASE_URL = 'http://localhost:8000';

export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  return await response.json();
};
