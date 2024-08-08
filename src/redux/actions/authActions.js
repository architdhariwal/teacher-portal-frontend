import * as api from '../../api';

export const login = (data) => async (dispatch) => {
  try {
    const { data: { token } } = await api.loginUser(data);
    localStorage.setItem('token', token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: { token } });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err.response?.data?.error });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    await api.registerUser(data);
    dispatch({ type: 'REGISTER_SUCCESS' });
  } catch (err) {
    dispatch({ type: 'REGISTER_FAILURE', payload: err.response?.data?.error });
  }
};

export const forgotPassword = (data) => async (dispatch) => {
  try {
    await api.forgotPassword(data);
    dispatch({ type: 'FORGOT_PASSWORD_SUCCESS' });
  } catch (err) {
    dispatch({ type: 'FORGOT_PASSWORD_FAILURE', payload: err.response?.data?.message });
  }
};

export const resetPassword = (token, data) => async (dispatch) => {
  try {
    await api.resetPassword(token, data);
    dispatch({ type: 'RESET_PASSWORD_SUCCESS' });
  } catch (err) {
    dispatch({ type: 'RESET_PASSWORD_FAILURE', payload: err.response?.data?.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};