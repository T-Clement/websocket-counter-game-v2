import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Link, Routes, Navigate } from "react-router-dom";
import Home from './components/Home';
import Error404 from './components/Error404';
import About from './components/About';
import Layout from './components/Layout';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Rooms from './components/Rooms';



function App() {

  const [user, setUser] = useState(null);

  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout user = { user } />}  >
        <Route index element = {<Home />} />
        <Route path="about" element={<About />} />
        <Route path='profile' element={ user ? <Profile user = { user }/> : <Navigate to="/" />} />
        <Route path='sign-in' element={<SignUp setUser = {setUser}/>} />
        <Route path='rooms' element={user ? <Rooms /> : <Navigate to="/" />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
