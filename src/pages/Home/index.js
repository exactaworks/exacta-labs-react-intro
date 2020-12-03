import React, { useState, useEffect } from 'react';

import { ArrowBack, ArrowForward } from '@styled-icons/material';

import { DEFAULT_PAGE_LIMIT } from '../../utils/constants';
import { getTasks, createTask, deleteTask } from '../../services/api';

import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';

import * as S from './styles';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState([]);

  const handleGetTasks = async (page = 1, limit = DEFAULT_PAGE_LIMIT) => {
    const tasks = await getTasks(page, limit);

    setCurrentPage(page);
    setTasks(tasks);
    setLoading(false);
  };

  const handleNextPage = () => tasks.length === DEFAULT_PAGE_LIMIT ?
    handleGetTasks(currentPage + 1) :
    handleGetTasks(currentPage);

  const handlePreviousPage = () => currentPage > 1 ?
    handleGetTasks(currentPage - 1) :
    handleGetTasks(currentPage);

  const handleTaskSubmit = async (description) => {
    const newTask = {
      id: `task-id-${(new Date()).getTime()}`,
      description,
    };

    await createTask(newTask);

    handleGetTasks(currentPage);
  }

  const handleTaskRemove = async (taskId) => {
    await deleteTask(taskId);

    handleGetTasks(currentPage);
  };

  useEffect(() => {
    setLoading(true);
    handleGetTasks();
  }, []);

  return (
    <S.Container>
      <S.Title>TASK LIST</S.Title>
      <TaskForm onSubmit={handleTaskSubmit} />
      {
        loading ?
          <p>Carregando...</p> :
          <TaskList tasks={tasks} onRemove={handleTaskRemove} />
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