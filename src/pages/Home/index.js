import React, { useState, useEffect } from 'react';

import { getTasks, createTasks, deleteTask } from '../../services/api';

import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';

import * as S from './styles';

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

    const updatedTaskList = tasks.filter(item => item.id !== taskId);

    setTasks(updatedTaskList);
  };

  useEffect(() => {
    setLoading(true);
    handleGetTasks();
  }, []);

  return (
    <S.Container>
      <S.Title>Task List</S.Title>
      <TaskForm onSubmit={handleTaskSubmit} />
      {
        loading ?
          <p>Carregando...</p> :
          <TaskList tasks={tasks} onRemove={handleRemoveTask} />
      }
    </S.Container>
  );
};

export default Home;