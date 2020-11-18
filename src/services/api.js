const BASE_URL = 'http://localhost:8000';

export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  return await response.json();
};

export const createTask = async (task) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  })

  return await response.json();
};