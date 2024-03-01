import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

function Error404() {
  return (
    <div>
        <p>Error404</p>
        <Link to="/" >Retournez à la page d'accueil</Link>        
    </div>
  )
}

export default Error404