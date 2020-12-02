const BASE_URL = 'http://localhost:8000';

const fetchRequest = async (method, path, body = null) => {
  const response = await fetch(`${BASE_URL}/${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body && JSON.stringfy(body),
  });

  return await response.json();
}

export const getTasks = async () => await fetchRequest('GET', 'tasks');

export const createTasks = async (task) => await fetchRequest('POST', 'tasks', task);

export const deleteTask = async (taskId) => await fetchRequest('DELETE', `tasks/${taskId}`);
