import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const [formInput , setFormInput]= useState({
    name :"",
    email :"" , 
    phone:"" ,

  })



  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");
 
    if (isLoggedIn !== "true") {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleChange = (e)=>{
    const {name ,value} = e.target ;
    setFormInput({...formInput , [name] : value})
  }

  return (
    <div>
    
       
      <h2 style={{textAlign:'center'}}>Welcome {user?.username}</h2>
      <button onClick={handleLogout}>Logout</button> <hr /> 

      <div>
          <h2>Create User</h2>

          <form   >
            {/* Name */}
              <label htmlFor="">Name :</label>
              <input 
                type="text"
                placeholder="Enter username"
                name="name"
                value={formInput.name}
                onChange={handleChange}

                />
            {/* Email */}
              <label htmlFor="">Email :</label>
              <input 
                type="email"
                placeholder="Enter email"
                name="email"
                value={formInput.email}
                onChange={handleChange}

                />
            {/* Phone */}
              <label htmlFor="">Phone :</label>
              <input 
                type="text"
                placeholder="Enter phone number"
                name="phone"
                value={formInput.phone}
                onChange={handleChange}

                />

                <button type="submit"> Add</button>



          </form>
      </div>
      
    </div>
  );
}

export default Home;


