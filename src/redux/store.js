import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import studentReducer from './reducers/studentReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
  },
});

export default store;
