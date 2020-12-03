const BASE_URL = 'http://localhost:8000';

const fetchRequest = async (method, path, body = null) => {
  const response = await fetch(`${BASE_URL}/${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body && JSON.stringify(body),
  });

  return await response.json();
};

export const getTasks = async (page = 1, limit = 5) =>
  await fetchRequest('GET', `tasks?_page=${page}&_limit=${limit}`);

export const createTask = async (task) =>
  await fetchRequest('POST', 'tasks', task);

export const deleteTask = async (taskId) =>
  await fetchRequest('DELETE', `tasks/${taskId}`);
