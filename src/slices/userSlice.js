import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: ['jithin'],  
}

export const userSlice = createSlice({
    name:'users',
    initialState:initialState ,
    reducers:{
      // state - current state
      setUsers:(state , action)=>{
        state.users = [...state.users , action.payload]
      },
      deleteUser:(state , action)=>{
        state.users = state.users.filter((user , index)=> index !== action.payload)
      }
    }
}) 

export const {setUsers , deleteUser} = userSlice.actions;

export default userSlice.reducer;















