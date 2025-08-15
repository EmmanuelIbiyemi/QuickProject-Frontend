import React from 'react'
import { BrowserRouter, Routes , Route } from "react-router-dom"


// -- The components for the uis
import Signup from './components/Signup'
import Login from './components/Login'
export default function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
       </Routes>
    </BrowserRouter>
    
  )
}
