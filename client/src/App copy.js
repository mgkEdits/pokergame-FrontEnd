import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Landing from './components/Landing';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Layout from './components/Layout';


function App() {
  return (
    <div className='main-sqr'>
      <div className='card-sqr'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>} />
            <Route index element={<Landing />}/>
            <Route path='log-in' element={<LoginForm/>} />
            <Route path='sign-up' element={<SignupForm/>} />
          </Routes>
        </BrowserRouter>
      </div>
     
    </div>
  );
}

export default App;
