import React from 'react'
import { useState  } from 'react'
import "./Nav.css"
import {FaBars,FaTimes} from "react-icons/fa"

import logo from "../../assets/Logo.svg"
function Nav() {
  const [isOpen,SetIsOpen]=useState(false)
  function changeStatusOpen() {
    SetIsOpen(!isOpen)

  }
  return (
    <div className='nav-container'>
      <a href='#inicio'><img alt="logo hamaderas" className='logo-img' src={logo}/></a>
            <nav className={`nav ${isOpen? "responsive-nav":""}`}>
            <button className='nav-btn nav-close-btn' onClick={changeStatusOpen}>
                <FaTimes/>
            </button>
                {/* <a href="#inicio" className='nav-item'  onClick={changeStatusOpen}>Inicio</a> */}
                <a href="#productos" className='nav-item'  onClick={changeStatusOpen}>Productos</a>
                <a href="#contactanos" className='nav-item '  onClick={changeStatusOpen}>Nuestro trabajo</a>

                <a href="#preguntas-frecuentes" className='nav-item'  onClick={changeStatusOpen}>Preguntas Frecuentes</a>
                <a href="#contactanos" className='nav-item'  onClick={changeStatusOpen}>Contactanos</a>

            </nav>

            <button  className="nav-btn" onClick={changeStatusOpen}>
              <FaBars/>
            </button>
    </div>
  )
}

export default Nav