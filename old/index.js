import store from "./store/Store.js"

// console.log( "getState", store.getState());
store.subscribe(()=>console.log(store.getState()))

store.dispatch({type: 'CHANGE_TASK', payload: "Annother task from payload"})

const task = {
   id: new Date().getUTCMilliseconds(),
   title: store.getState().task.taskInput
}

store.dispatch({type: 'CREATE_TASK', payload: task})


store.dispatch({type: 'CHANGE_TASK', payload: "Simple task from payload"})
const task2 = {
   id: new Date().getUTCMilliseconds(),
   title: store.getState().taskInput
}
store.dispatch({type: 'CREATE_TASK', payload: task2})


console.log("Listing TaskReducer form Store", store.getState().task);
