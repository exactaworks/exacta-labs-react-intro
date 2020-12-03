import { BASE_URL, DEFAULT_LIMIT_VALUE } from '../utils/constants';

const fetchRequest = async (method, path, body = null) => {
  const response = await fetch(`${BASE_URL}/${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body && JSON.stringify(body),
  });

  return await response.json();
};

export const getTasks = async (page = 1, limit = DEFAULT_LIMIT_VALUE) => {
  const queryParams = new URLSearchParams({
    _page: page,
    _limit: limit,
  });

  return await fetchRequest('GET', `tasks?${queryParams}`);
};

export const createTasks = async (task) =>
  await fetchRequest('POST', 'tasks', task);

export const deleteTask = async (taskId) =>
  await fetchRequest('DELETE', `tasks/${taskId}`);
