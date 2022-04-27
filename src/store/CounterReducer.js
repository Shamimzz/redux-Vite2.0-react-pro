const initial = {
    value: 10,
  };

function counterReducer(state = initial, action) {
    switch (action.type) {
      case 'INCREMENT_ONE': 
        return { value: state.value + 1 }
  
      case 'DECREMENT_ONE':
        return {
           ...state,
           value: state.value - 1
          }
      case 'INCREMENT':
        return { 
            ...state,
            value: state.value + action.value
           }

      default:
        return state 
    }
  }
  

export default counterReducer;