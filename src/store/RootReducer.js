import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import TaskReducer from "./TaskReducer";

const RootReducer = combineReducers({
   task:  TaskReducer,  // rename korte pari like- task: {TaskReducer, counter: counterReducer}
   counter: counterReducer,
})

export default RootReducer;