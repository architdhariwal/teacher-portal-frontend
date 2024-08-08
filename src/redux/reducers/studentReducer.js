const initialState = {
    students: [],
    error: null,
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_STUDENTS_SUCCESS':
        return { ...state, students: action.payload };
      case 'GET_STUDENTS_FAILURE':
        return { ...state, error: action.payload };
      case 'ADD_STUDENT_SUCCESS':
        return { ...state, students: [...state.students, action.payload] };
      case 'ADD_STUDENT_FAILURE':
        return { ...state, error: action.payload };
      case 'UPDATE_STUDENT_SUCCESS':
        return {
          ...state,
          students: state.students.map((student) =>
            student._id === action.payload._id ? action.payload : student
          ),
        };
      case 'UPDATE_STUDENT_FAILURE':
        return { ...state, error: action.payload };
      case 'DELETE_STUDENT_SUCCESS':
        return {
          ...state,
          students: state.students.filter((student) => student._id !== action.payload),
        };
      case 'DELETE_STUDENT_FAILURE':
        return { ...state, error: action.payload };
      case 'SET_STUDENTS':
        return { ...state, students: action.payload };
      default:
        return state;
    }
  };
  
  export default studentReducer;