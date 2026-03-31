import React from 'react';
import { useSelector } from 'react-redux';


const UsersDetails = () => {
   const users =  useSelector((state)=> state.usersInfo.users)
   console.log(users);
   
  return (
    <div>
        <h1>UsersDetails</h1>
        {users}
      
    </div>
  );
}

export default UsersDetails;



