import React from 'react';

const TaskListItem = ({ id, description, onRemove }) => {
  return (
    <li>
      <span>{description}</span>
      <span onClick={() => onRemove(id)}> X </span>
    </li>
  );
};

export default TaskListItem;
