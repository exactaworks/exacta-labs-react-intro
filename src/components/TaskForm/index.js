import React, { useState } from 'react';

import Input from '../Input';

import * as S from './styles';

const TaskForm = ({ onSubmit }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskDescription);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input placeholder="DESCRIÇÃO" onChange={e => setTaskDescription(e.target.value)} />
      <S.Button type="submit">ADICIONAR TASK</S.Button>
    </S.Form>
  );
};

export default TaskForm;