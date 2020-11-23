import React, { useState, useEffect } from 'react';

import { getTasks, createTasks, deleteTask } from '../../services/api';

import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleGetTasks = async () => {
    const response = await getTasks();
    
    setTasks(response);
    setLoading(false);
  };

  const handleTaskSubmit = async (description) => {
    const newTask = {
      id: `id-${(new Date()).getTime()}`,
      description,
    };

    await createTasks(newTask);

    const updatedTaskList = [...tasks, newTask];

    setTasks(updatedTaskList);
  };

  const handleRemoveTask = async (taskId) => {
    await deleteTask(taskId);

    // const updatedTaskList = tasks.filter(item => item.id !== taskId);
    // setTasks(updatedTaskList);
  };

  useEffect(() => {
    setLoading(true);
    handleGetTasks();
  }, []);

  return (
    <>
      <h1>Task List</h1>
      <TaskForm onSubmit={handleTaskSubmit} />
      {
        loading ?
          <p>Carregando...</p> :
          <TaskList tasks={tasks} onRemove={handleRemoveTask} />
      }
    </>
  );
};

export default Home;