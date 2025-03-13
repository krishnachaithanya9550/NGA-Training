// import { legacy_createStore as createStore, combineReducers } from 'redux';
// import authReducer from './reducers'; 
// import taskReducer from './reducers';

// const rootReducer = combineReducers({
//   auth: authReducer.authReducer,
//   task: taskReducer.taskReducer,
// });

// const store = createStore(
//   rootReducer
 
// );

// export default store;


// src/store.js
import { legacy_createStore as createStore } from 'redux';

// Your reducer function (this is a simple example, customize as needed)
const rootReducer = (state = { auth: { isAuthenticated: false } }, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATED':
      return { ...state, auth: { isAuthenticated: action.payload } };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
