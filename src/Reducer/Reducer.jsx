import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../Action/Action";


const initialState = { allValue: [], editId: -1, }


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        allValue: [...state.allValue, { ...action.payload.newTask, tags: action.payload.tags }],
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

    case EDIT_TASK:
      const { editId, title, description, tags } = action.payload.editedTask;
      const updatedTasks = state.allValue.map((task) => {
        if (task.id === editId) {
          return {
            ...task,
            title,
            description,
            tags,
          };
        }
        return task;
      });

      return {
        ...state,
        allValue: updatedTasks,
        editId: -1,
      };

    default:
      return state;
  }
};

export default todoReducer;
