import {configureStore} from '@reduxjs/toolkit'
import   userSlice   from '../slices/userSlice'


const store = configureStore({
    reducer:{
         usersInfo : userSlice, 
    }
})

export default store;






