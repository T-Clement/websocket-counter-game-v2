import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Link, Routes } from "react-router-dom";
import Home from './components/Home';
import Error404 from './components/Error404';
import About from './components/About';
import Layout from './components/Layout';
import Profile from './components/Profile';
import SignUp from './components/SignUp';



function App() {

  const [user, setUser] = useState(null);

  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout user = { user } />}  >
        <Route index element = {<Home />} />
        <Route path="about" element={<About />} />
        <Route path='profile' element={<Profile user = { user }/>} />
        <Route path='sign-in' element={<SignUp setUser = {setUser}/>} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
