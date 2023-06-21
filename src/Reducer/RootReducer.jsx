import todoReducer from "./Reducer"
import { toggle } from "../Action/Action"

import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    toggle,
    todoReducer,

})