import React, { useState, useEffect } from 'react';

import { getTasks } from '../services/api';

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

  useEffect(() => {
    setLoading(true);
    handleGetTasks();
  }, []);

  const handleTaskSubmit = (description) => {
    const newTask = {
      id: tasks.length + 1,
      description,
    };

    const updatedTaskList = [...tasks, newTask];

    setTasks(updatedTaskList);
  }

  const handleTaskRemove = (taskId) => {
    const updatedTaskList = tasks.filter(item => item.id !== taskId);
    setTasks(updatedTaskList);
  };

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