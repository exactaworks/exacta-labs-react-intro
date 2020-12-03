import React, { useState, useEffect } from 'react';

import { ArrowBack, ArrowForward } from '@styled-icons/material';

import { DEFAULT_LIMIT_VALUE } from '../../utils/constants';
import { getTasks, createTasks, deleteTask } from '../../services/api';

import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';

import * as S from './styles';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState([]);

  const handleGetTasks = async (page = 1, limit = DEFAULT_LIMIT_VALUE) => {
    const response = await getTasks(page, limit);

    console.log(response);

    setCurrentPage(page);
    setTasks(response);
    setLoading(false);
  };

  const handleNextPage = () => tasks.length === DEFAULT_LIMIT_VALUE ? 
    handleGetTasks(currentPage + 1) :
    handleGetTasks(currentPage);

  const handlePreviousPage = () => currentPage > 1 ?
    handleGetTasks(currentPage - 1) :
    handleGetTasks(currentPage);

  const handleTaskSubmit = async (description) => {
    const newTask = {
      id: `id-${(new Date()).getTime()}`,
      description,
    };

    await createTasks(newTask);

    handleGetTasks(currentPage);
  };

  const handleRemoveTask = async (taskId) => {
    await deleteTask(taskId);

    handleGetTasks(currentPage);
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
      <S.Pagination>
        <ArrowBack onClick={handlePreviousPage} />
        <p>Página {currentPage}</p>
        <ArrowForward onClick={handleNextPage} />
      </S.Pagination>
    </S.Container>
  );
};

export default Home;