// Import createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// This is the starting data (initial state)
const initialState = {
    users: [],   // empty array to store users
}

// Create a slice (like a small part of Redux store)
export const userSlice = createSlice({
    
    name: 'users', // name of this slice (name must be unique)
    
    initialState:initialState,  // attach the initial state
    
    reducers: {
        
        // ADD USER
        setUsers: (state, action) => {
             // state = current state 
            // action.payload = new user data
            // add new user to existing users list
            state.users = [...state.users, action.payload]
        },

        // DELETE USER
        deleteUser: (state, action) => {
            // action.payload = index of user to delete
            // remove user whose index matches payload
            state.users = state.users.filter((user, index) => 
                index !== action.payload
            )
        }
    }
})

// Export actions (functions you will use in components)
export const { setUsers, deleteUser } = userSlice.actions;

// Export reducer (used in store)
export default userSlice.reducer;













