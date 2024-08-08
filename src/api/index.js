import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://teacher-portal-backend-1ge4.onrender.com",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Authorization header set:', config.headers.Authorization);
    }
    return config;
  },
  (error) => {
    console.error('Axios request interceptor error:', error);
    return Promise.reject(error);
  }
);

export const registerUser = (data) => {
  console.log('Registering user:', data);
  return instance.post('/api/auth/register', data);
};

export const loginUser = (data) => {
  console.log('Logging in user:', data);
  return instance.post('/api/auth/login', data);
};

export const forgotPassword = (data) => {
  console.log('Forgot password request:', data);
  return instance.post('/api/auth/forgot-password', data);
};

export const resetPassword = (token, data) => {
  console.log('Resetting password:', data);
  return instance.post(`/api/auth/reset-password/${token}`, data);
};

export const getStudents = () => {
  console.log('Fetching students');
  return instance.get('/api/students');
};

export const addStudent = (data) => {
  console.log('Adding student:', data);
  return instance.post('/api/students', data);
};

export const updateStudent = (id, data) => {
  console.log(`Updating student ${id}:`, data);
  return instance.put(`/api/students/${id}`, data);
};

export const deleteStudent = (id) => {
  console.log(`Deleting student ${id}`);
  return instance.delete(`/api/students/${id}`);
};