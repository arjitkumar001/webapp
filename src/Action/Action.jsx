

export const addItem=(title,description)=>{
    return {
        type:"ADD_TASK",
        payload:{
            title,
            description
        }
    }
}

