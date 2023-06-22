import { ADD_TASK, DELETE_TASK, DONE_TASK} from "../Action/Action";


const initialState = { allValue: [], editId: -1, }


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        allValue: [...state.allValue, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        allValue: state.allValue.filter((task) => task.id !== action.payload),
      };
    case DONE_TASK:
      return {
        ...state,
        allValue: action.payload,
      };
      case 'EDIT_ITEM':
        const { editId, title, description } = action.payload;
        const updatedTasks = state.tasks.map((task, index) => {
          if (index === editId) {
            return {
              title,
              description,
            };
          }
          return task;
        });
  
        return {
          ...state,
          tasks: updatedTasks,
          editId: -1,
        };
  


    default:
      return state;
  }
};

export default todoReducer;
