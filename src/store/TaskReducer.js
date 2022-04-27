const initial = {
    taskInput: 'demo text',
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
            task: [ action.payload, ...state.task],
          }
  
      default:
        return state 
    }
  }
  

export default TaskReducer;