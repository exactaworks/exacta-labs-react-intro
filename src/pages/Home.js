import React, { useState, useEffect } from 'react';

import { getTasks, createTask, deleteTask } from '../services/api';

import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleGetTasks = async () => {
    const tasks = await getTasks();

    setTasks(tasks);
    setLoading(false);
  };

  const handleTaskSubmit = async (description) => {
    const newTask = {
      id: tasks.length + 1,
      description,
    };

    await createTask(newTask);

    const updatedTaskList = [...tasks, newTask];

    setTasks(updatedTaskList);
  }

  const handleTaskRemove = async (taskId) => {
    const updatedTaskList = tasks.filter(item => item.id !== taskId);

    await deleteTask(taskId);

    setTasks(updatedTaskList);
  };

  useEffect(() => {
    setLoading(true);
    handleGetTasks();
  }, []);

  return (
    <>
      <h1>To Do List</h1>
      <TaskForm onSubmit={handleTaskSubmit} />
      {
        loading ?
          <p>Carregando...</p> :
          <TaskList tasks={tasks} onRemove={handleTaskRemove} />
      }
    </>
  );
};

export default Home;