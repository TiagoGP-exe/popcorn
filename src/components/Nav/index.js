import './style.css';
import logo from '../../img/logo.svg'
import React from 'react'

function Nav() {
  return (
    <div className="header" >
      <img src={logo} alt="PopcornCine" />
    </div>
  )
}

export default Nav;
