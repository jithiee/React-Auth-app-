// Import createSlice function from Redux Toolkit library
// createSlice helps us easily create Redux slices (state management units)
import {createSlice} from '@reduxjs/toolkit'

// Define the initial state of our Redux store
// This is what the state looks like when the app first starts
const initialState = {
    users: [],  // Empty array to store user data
}

// Create a Redux slice named 'users'
// A slice combines the state, reducers, and actions in one place
export const userSlice = createSlice({
    // 'name' is used to generate action types (e.g., 'users/setUsers')
    name:'users',
    
    // 'initialState' sets the starting state for this slice
    initialState:initialState ,
    
    // 'reducers' contains functions that modify the state
    // These functions are called "reducers" and they update the state based on actions
    reducers:{
      // This reducer function adds a new user to the users array
      // 'state' = the current state
      // 'action' = the action object that triggers the reducer
      // 'action.payload' = the data being passed to this reducer
      setUsers:(state , action)=>{
        // Spread operator (...) keeps existing users and adds the new one
        // This creates a new array instead of mutating the old one
        state.users = [...state.users , action.payload]
      }  
    }
}) 

// This exports the action creator that you can use to dispatch the setUsers action
// Usage: dispatch(userSlice.actions.setUsers(userData))

// This exports the reducer function that handles state updates
// Usage: store.js imports this to add to the store






