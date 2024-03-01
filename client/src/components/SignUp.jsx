import React from 'react'
import { useNavigate } from "react-router-dom";

function SignUp({setUser}) {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    setUser(formData.get("username"));

    navigate("/");
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Votre nom de joueur</label>
          <input type="text" name="username" id="username"/>
          <input type="submit" value="Se connecter" />
        </form>
    </div>
  )
}

export default SignUp