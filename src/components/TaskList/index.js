import React from 'react';

import TaskListItem from '../TaskListItem';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(item =>
        <TaskListItem key={item.id} description={item.description} />
      )}
    </ul>
  );
};

export default TaskList;