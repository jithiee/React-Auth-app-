import React from 'react';
import { useSelector } from 'react-redux';


const UsersDetails = () => {
   const users =  useSelector((state)=> state.usersInfo.users)
  // useSelector is used to read data from Redux store
  // state = whole Redux store
  // state.usersInfo = the key you defined in store
  // state.usersInfo.users = actual users array
  
   console.log(users);
   
  return (
    <div>
        <h1>UsersDetails</h1>
        {users}
      
    </div>
  );
}

export default UsersDetails;



