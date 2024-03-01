import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {styled} from "styled-components";
import SignUp from './SignUp';

const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  justify-content: center;
`;





function Layout({user}) {

  



  return (
    <>
        <header>
            <NavStyled>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About this game</NavLink>

                {
                  (user) ? <><NavLink to="/profile">Welcome {user}</NavLink><NavLink to="/rooms">Rooms</NavLink><button>Log-Out</button></> 
                  : 
                  <NavLink to="/sign-in" >Sign-in</NavLink>
                }
                
            </NavStyled>
        </header>
        <main>
          <Outlet />
        </main>
    </>
  )
}

export default Layout