// store/reducers/userReducer.js

const initialState = {
    user: null,
    tokenExpiry: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload.user,
          tokenExpiry: action.payload.tokenExpiry,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          tokenExpiry: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  