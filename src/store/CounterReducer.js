const initial = {
    value: 0,
  };

function counterReducer(state = initial, action) {
    switch (action.type) {
      case 'task/fetchAllTask/pending': 
        return {...state, loading: true  }
  
      case 'task/fetchAllTask/fulfilled': 
        return {...state, loading: false }
  
      case 'INCREMENT_ONE': 
        return {...state, value: state.value + 1 }
  
      case 'DECREMENT_ONE':
        return {...state, value: state.value - 1 }
      case 'INCREMENT':
        return {...state,
           value: state.value + action.value
           }

      default:
        return state 
    }
  }
  

export default counterReducer;