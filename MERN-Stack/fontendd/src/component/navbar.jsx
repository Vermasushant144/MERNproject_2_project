import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">MERN</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
     
      
      <li className="nav-item">
        <Link className="nav-link" to={"/"}>Create POST</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/all"}>ALL POST</Link>
      </li>
     
    </ul>
  </div>
</nav>
  )
}

export default navbar