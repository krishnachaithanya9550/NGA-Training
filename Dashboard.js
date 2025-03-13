import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import TaskList from '../components/TaskList';
// import './dashbord.css';

const Dashboard = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    const newTask = { id: Date.now(), text: taskText };
    dispatch(addTask(newTask));
    setTaskText('');
  };

  return (
    <div>
      <h2>Task Dashboard</h2>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <TaskList />
    </div>
  );
};

export default Dashboard;




// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard Page</h2>
//       <p>Welcome to the dashboard! Only accessible to admin users.</p>
//     </div>
//   );
// }
// export default Dashboard;
