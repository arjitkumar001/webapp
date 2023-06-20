const initialState = {
    allValue: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          allValue: [...state.allValue, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  