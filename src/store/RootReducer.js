import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import TaskReducer from "./TaskReducer";

const RootReducer = combineReducers({
    TaskReducer,  // rename korte pari like- task: {TaskReducer, counter: counterReducer}
    counterReducer,
})

export default RootReducer;