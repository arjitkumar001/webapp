
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK='DELETE_TASK';
export const EDIT_TASK='EDIT_TASK';
export const DONE_TASK='DONE_TASK';



export const addItem = (newTask,tags) => {
    return {
        type: ADD_TASK,
        payload:{ newTask,tags}
    }
}

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const doneTask=(task)=>{
  return{
    type:DONE_TASK,
    payload:task,
  }
}

export const editTask = (editedTask,tags) => {
  return {
    type: EDIT_TASK,
    payload: {editedTask,tags}
  };
};


