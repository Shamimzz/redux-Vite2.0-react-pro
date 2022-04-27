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

export const CreateNewTask = createAsyncThunk(
  'task/CreateNewTask',
  async (taskInput) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title : taskInput,
      useId: 1,
    });
    console.log(res.data);
    return res.data
  }
)


function TaskReducer(state = initial, action) {
    switch (action.type) {
      // loading true start untill data comes.
      case 'task/fetchAllTask/pending':
        return { 
            ...state,
            loading: true
          }

      // loading true start untill data comes.
      case 'task/fetchAllTask/rejected':
        return { 
            ...state,
            loading: false,
          }

    // loading end after getting data.
      case 'task/fetchAllTask/fulfilled':
        return { 
            ...state,
            loading: false,
            task: action.payload // data coming from fetchAllTask function.
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