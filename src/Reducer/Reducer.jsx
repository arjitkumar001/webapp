

const initialState = {
  toggle:true,
  allValue: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        toggle: !state.toggle,
      };
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
