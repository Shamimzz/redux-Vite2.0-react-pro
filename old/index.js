import store from "./store/Store.js"

// const initial = {
//     value: 0,
//     name: "Shamim",
//     taskInput: '',
//     task: [
//         {
//             id: 1, 
//             title: 'First task'
//         },
//         {
//             id: 2, 
//             title: '2nd task'
//         },
//         {
//             id: 3, 
//             title: 'third task'
//         }
//     ]
//   };

// function counterReducer(state = initial, action) {
//   switch (action.type) {
//     case 'INCREMENT_ONE': 
//       return { value: state.value + 1 }

//     case 'DECREMENT_ONE':
//       return {
//          ...state,
//          value: state.value - 1
//         }
//         // (action.value) astece dispatch theke dynamic value.
//     case 'INCREMENT':
//       return { 
//           ...state,
//           value: state.value + action.value
//          }

//     case 'CHANGE_NAME':
//       return { 
//           ...state,
//           name: action.name
//          }

//     case 'CHANGE_TASK':
//       return { 
//           ...state,
//           taskInput: action.payload
//         }

//     case 'CREATE_TASK':
//       return { 
//           ...state,
//           task: [ ...state.task, action.payload]
//         }

//     default:
//       return state 
//   }
// }


// let store = createStore(counterReducer);

// console.log( "store", store);
// console.log( "getState", store.getState());

store.subscribe(()=>console.log(store.getState()))

// Dispatch er maje akta action dite hobe jar maje type thakbe.
// store.dispatch({type: 'INCREMENT_ONE'})

// store.dispatch({type: 'DECREMENT_ONE'})

// store.dispatch({type: 'INCREMENT', value: 10})

// store.dispatch({type: 'CHANGE_NAME', name: "Rayhan"})

store.dispatch({type: 'CHANGE_TASK', payload: "Annother task from payload"})
// const task = {
//    id: new Date().getUTCMilliseconds(),
//    title: store.getState().taskInput
// }

const task = {
   id: new Date().getUTCMilliseconds(),
   title: store.getState().TaskReducer.taskInput
}

store.dispatch({type: 'CREATE_TASK', payload: task})


store.dispatch({type: 'CHANGE_TASK', payload: "Simple task from payload"})
const task2 = {
   id: new Date().getUTCMilliseconds(),
   title: store.getState().taskInput
}
store.dispatch({type: 'CREATE_TASK', payload: task2})


console.log("Listing TaskReducer form Store", store.getState().TaskReducer);
