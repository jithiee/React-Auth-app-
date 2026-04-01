import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../slices/userSlice';


const UsersDetails = () => {
   const users =  useSelector((state)=> state.usersInfo.users)

  // useSelector is used to read data from Redux store
  // state = whole Redux store
  // state.usersInfo = the key you defined in store
  // state.usersInfo.users = actual users array
  //  console.log(users);
  const dispatch = useDispatch()

const deleteuserInfo =(index)=>{
  dispatch(deleteUser(index))
}

   
  return (
    <div>
        <h1>UsersDetails</h1>
        {
          users.map((users , index)=>(
      
            <ul key={index} >
              <li>Username : {users.name}</li>
              <li>Email : {users.email}</li>
              <li>Phone : {users.phone}</li>
              <button onClick={()=>deleteuserInfo(index)} >delete</button>
              <hr />
            </ul> 
          ))  
        }
       
      
    </div>
  );
}

export default UsersDetails;



