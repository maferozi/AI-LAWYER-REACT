import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/AuthLayout'
import Login from './containers/auth/login'
import Register from './containers/auth/register'
import AppLayout from './components/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import { clearMesage, meRequest } from './redux/action/auth.action'
import UnauthorizedRoute from './components/UnautherizedRoute'
import PrivateRoute from './components/PrivateRoute'
import Swal from "sweetalert2";

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
      dispatch(meRequest()); 
  },[])

  
  const { error, loading, success } = useSelector((state) => state.auth);
  if (error && error.message) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      timer:3000
    });
  } else if (success) {
    Swal.fire({
      icon: "success",
      title: "Congrats",
      text: success,
      timer:3000
    });
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(clearMesage());
    }, 3000);
    return () => clearTimeout(timeout);
  }, [error, success]);

  return (
    <>
    <Routes>
      <Route element={<UnauthorizedRoute/>}>
      <Route path="/" element={<AuthLayout />}>
        <Route
          path="login"
          element={<Login />}
        />
        <Route path="register" element={<Register />} />
      </Route>
      </Route>
      <Route element={<PrivateRoute/>}>
      <Route path='/dashboard' element={<AppLayout/>}>
      </Route>
      </Route>
    </Routes>
      
    </>
  )
}

export default App
