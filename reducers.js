import { LOGIN_SUCCESS, LOGOUT, ADD_TASK, DELETE_TASK } from './types';

// Initial state for auth
const initialAuthState = {
  isAuthenticated: false,
  user: null,
};

// Reducer for authentication
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

// Initial state for tasks
const initialTaskState = {
  tasks: [],
};

// Reducer for tasks
const taskReducer = (state = initialTaskState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
};

export default { authReducer, taskReducer };
