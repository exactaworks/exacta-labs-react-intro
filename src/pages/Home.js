import React, { useState } from 'react';

import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Comprar pão' },
    { id: 2, description: 'Lavar louça' },
    { id: 3, description: 'Comprar ração dos gatos' },
    { id: 4, description: 'Abastecer carro' },
  ]);

  return (
    <>
      <h1>To Do List</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  );
};

export default Home;