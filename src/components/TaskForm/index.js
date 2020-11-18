import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskDescription)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Descrição" onChange={e => setTaskDescription(e.target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;