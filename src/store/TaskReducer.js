const initial = {
    taskInput: '',
    task: [
        {
            id: 1, 
            title: 'First task'
        },
        {
            id: 2, 
            title: '2nd task'
        },
        {
            id: 3, 
            title: 'third task'
        }
    ]
  };

function TaskReducer(state = initial, action) {
    switch (action.type) {
      case 'CHANGE_TASK':
        return { 
            ...state,
            taskInput: action.payload
          }
  
      case 'CREATE_TASK':
        return { 
            ...state,
            task: [ ...state.task, action.payload]
          }
  
      default:
        return state 
    }
  }
  

export default TaskReducer;