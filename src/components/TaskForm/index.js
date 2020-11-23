import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(taskDescription);
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="DESCRIÇÃO"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;