import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    ],
    loading: false
  };



// First, create the thunk
export const fetchAllTask = createAsyncThunk(
  'task/fetchAllTask',
  async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(res);
    return res.data
  }
)




function TaskReducer(state = initial, action) {
    switch (action.type) {
      case 'tasks/fetchAllTask/pending':
        return { 
            ...state,
            loading: true
          }
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