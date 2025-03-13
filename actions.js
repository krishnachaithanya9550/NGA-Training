import { LOGIN_SUCCESS, LOGOUT, ADD_TASK, DELETE_TASK } from './types';

export const login = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
