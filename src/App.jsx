import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/AuthLayout'
import Login from './containers/auth/login'
import Register from './containers/auth/register'
import AppLayout from './components/AppLayout'
import { useDispatch } from 'react-redux'
import { meRequest } from './redux/action/auth.action'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(meRequest()); 
  },[])

  return (
    <>
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route
          path="login"
          element={<Login />}
        />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path='/dashboard' element={<AppLayout/>}>

      </Route>
    </Routes>
      
    </>
  )
}

export default App
