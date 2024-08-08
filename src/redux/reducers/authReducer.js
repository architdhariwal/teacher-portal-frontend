const initialState = {
    token: null,
    isLoggedIn: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, token: action.payload.token, isLoggedIn: true, error: null };
      case 'LOGIN_FAILURE':
        return { ...state, error: action.payload };
      case 'REGISTER_SUCCESS':
        return { ...state, error: null };
      case 'REGISTER_FAILURE':
        return { ...state, error: action.payload };
      case 'FORGOT_PASSWORD_SUCCESS':
        return { ...state, error: null };
      case 'FORGOT_PASSWORD_FAILURE':
        return { ...state, error: action.payload };
      case 'RESET_PASSWORD_SUCCESS':
        return { ...state, error: null };
      case 'RESET_PASSWORD_FAILURE':
        return { ...state, error: action.payload };
      case 'LOGOUT':
        return { ...state, token: null, isLoggedIn: false, error: null };
      default:
        return state;
    }
  };
  
  export default authReducer;