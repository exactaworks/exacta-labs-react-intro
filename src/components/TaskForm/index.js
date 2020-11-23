import React, { useState } from 'react';

import Input from '../Input';
import Button from '../Button';

import * as S from './styles';

const TaskForm = ({ onSubmit }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskDescription);
    setTaskDescription('');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input
        placeholder="DESCRIÇÃO"
        value={taskDescription}
        onChange={e => setTaskDescription(e.target.value)}
        onClear={() => setTaskDescription('')}
      />
      <Button type="submit">ADICIONAR TASK</Button>
    </S.Form>
  );
};

export default TaskForm;