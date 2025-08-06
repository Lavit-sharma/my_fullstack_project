import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTasks } from '../redux/slices/taskSlice';
import api from '../api/axios';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!token) return;
      try {
        const response = await api.get('tasks/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setTasks(response.data));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [dispatch, token]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <ul>
        {tasks.length === 0 && <p>No tasks available.</p>}
        {tasks.map(task => (
          <li key={task.id} className="mb-2">
            <h2 className="font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.completed ? "Completed" : "Pending"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
