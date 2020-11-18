import React, { useState, useEffect } from 'react';

import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TASKS_MOCK = [
  { id: 1, description: 'Comprar pão' },
  { id: 2, description: 'Lavar louça' },
  { id: 3, description: 'Comprar ração dos gatos' },
  { id: 4, description: 'Abastecer carro' },
];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setTasks(TASKS_MOCK);
      setLoading(false);
    }, 2000);
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