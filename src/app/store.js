// Import configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'

// Import reducer from userSlice file
import userSlice from '../slices/userSlice'

// Create the Redux store
const store = configureStore({
    
    reducer: {
        // "usersInfo" is the name you will use to access this data in components
        
        // userSlice is the reducer we created earlier
        // it controls how users data changes
        usersInfo: userSlice,
    }
})

// Export store so we can use it in the app
export default store;




