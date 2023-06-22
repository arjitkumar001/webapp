
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK='DELETE_TASK';
export const EDIT_ITEM='EDIT_ITEM';
export const DONE_TASK='DONE_TASK';



export const addItem = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

// export const updateTask = (updatedTask) => {
//   return {
//     type: UPDATE_TASK,
//     payload: updatedTask,
//   };
// };
export const doneTask=(task)=>{
  return{
    type:DONE_TASK,
    payload:task,
  }
}
export const editTask = (editId, title, description) => {
  return {
    type: EDIT_ITEM,
    payload: {
      editId,
      title,
      description,
    },
  };
};
