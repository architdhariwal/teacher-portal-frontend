import * as api from '../../api';

export const getStudents = () => async (dispatch) => {
  try {
    const { data } = await api.getStudents();
    dispatch({ type: 'GET_STUDENTS_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'GET_STUDENTS_FAILURE', payload: err.response?.data?.error });
  }
};

export const addStudent = (data) => async (dispatch) => {
  try {
    const { data: newStudent } = await api.addStudent(data);
    dispatch({ type: 'ADD_STUDENT_SUCCESS', payload: newStudent });
  } catch (err) {
    dispatch({ type: 'ADD_STUDENT_FAILURE', payload: err.response?.data?.error });
  }
};

export const updateStudent = (id, data) => async (dispatch) => {
  try {
    console.log('Making API request to update student:', { id, data });
    const { data: updatedStudent } = await api.updateStudent(id, data);
    console.log('API response for updating student:', updatedStudent);
    dispatch({ type: 'UPDATE_STUDENT_SUCCESS', payload: updatedStudent });
    return updatedStudent; 
  } catch (err) {
    console.error('API error while updating student:', err);
    dispatch({ type: 'UPDATE_STUDENT_FAILURE', payload: err.response?.data?.error });
    throw err; 
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await api.deleteStudent(id);
    dispatch({ type: 'DELETE_STUDENT_SUCCESS', payload: id });
  } catch (err) {
    dispatch({ type: 'DELETE_STUDENT_FAILURE', payload: err.response?.data?.error });
  }
};