import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
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

  return (
    <div>
    
       
      <h2 style={{textAlign:'center'}}>Welcome {user?.username}</h2>
      <button onClick={handleLogout}>Logout</button> <hr /> 

      <div>
          <h2>Create User</h2>
      </div>
      
    </div>
  );
}

export default Home;


