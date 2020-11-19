import React from 'react';

import * as S from './styles';

const TaskList = ({ tasks, onRemove }) => {
  return (
    <S.List>
      {tasks.map(item =>
        <S.ListItem key={item.id}>
          <span>{item.description}</span>
          <S.DeleteIcon onClick={() => onRemove(item.id)} />
        </S.ListItem>
      )}
    </S.List>
  );
};

export default TaskList;