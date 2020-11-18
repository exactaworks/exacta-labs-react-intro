import React from 'react';

import TaskListItem from '../TaskListItem';

const TaskList = ({ tasks, onRemove }) => {
  return (
    <ul>
      {tasks.map(item =>
        <TaskListItem
          key={item.id}
          id={item.id}
          description={item.description}
          onRemove={onRemove}
        />
      )}
    </ul>
  );
};

export default TaskList;