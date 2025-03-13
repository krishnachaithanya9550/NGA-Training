import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const employees = useSelector(state => state.employee.employees);

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {employees.map((employee) => (
          <TaskItem key={employee.id} task={employee} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
