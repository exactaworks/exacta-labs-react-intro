import React, { useState } from 'react';

import * as S from './styles';

const TaskForm = ({ onSubmit }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskDescription)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input placeholder="DESCRIÇÃO" onChange={e => setTaskDescription(e.target.value)} />
      <S.Button type="submit">ADICIONAR TASK</S.Button>
    </S.Form>
  );
};

export default TaskForm;