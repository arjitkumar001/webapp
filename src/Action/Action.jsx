export const TOGGLE='TOGGLE';
export const ADD_TASK = 'ADD_TASK';

export const toggle = () => {
    return {
      type: TOGGLE,
    };
  };

export const addItem = (title, description) => {
    return {

        type: ADD_TASK,
        payload: {
            title,
            description
        }
    }
}
