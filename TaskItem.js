import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      {task.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
