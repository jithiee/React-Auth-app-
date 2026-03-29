import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import UsersDetails from './components/UsersDetails';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
     
     <BrowserRouter>
      <Navbar/>
          <Routes>
             <Route path='/'  element={
              <PublicRoute>
                <Register/>
              </PublicRoute>
              } />
             <Route path='/login'  element={
               <PublicRoute>
                 <Login/>
               </PublicRoute>
              } />
             <Route path='/home'  element={
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute>
              } />
             <Route path='/users'  element={
                <ProtectedRoute>
                  <UsersDetails/>
                </ProtectedRoute>
              } />


          </Routes>
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;



