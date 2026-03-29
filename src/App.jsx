import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute';


const App = () => {
  return (
    <div>
     
     <BrowserRouter>
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
          </Routes>
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;
