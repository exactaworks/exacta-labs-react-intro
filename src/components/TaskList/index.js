import React from 'react';


const TaskList = ({ tasks, onRemove }) => {
  return (
    <ul>
      {
        tasks.map(item =>
          <li>
            <span>{item.description}</span>
            <span onClick={() => onRemove(item.id)}> X </span>
          </li>
        )
      }
    </ul>
  );
};

export default TaskList;