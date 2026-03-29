import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
       <header>
        <nav style={{display:'flex' , justifyContent:'space-between',padding:'20px' , backgroundColor:'#305CDE', color: 'white'  ,  }}>
          <p>Redux</p>
          <ul style={{display:'flex' , listStyle:'none', gap:'30px' , cursor:'pointer'}}>
              
              <li>
                 <Link to='/' style={{textDecoration:'none' , color:'white'}}>Home</Link> 
              </li>
              <li>
                 <Link to='/users' style={{textDecoration:'none' , color:'white'}}>Users</Link> 
              </li>
        
              <li>About</li>
              <li>Contact</li>
              
          </ul>
          
        </nav>
     </header>
    </div>
  );
}

export default Navbar;
