import React from 'react'; 
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Projects from './pages/projects';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/dashboard';
import About from './pages/About';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/projects' element={<Projects />} />
        <Route path='/' element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}
