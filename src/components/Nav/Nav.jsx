import React from 'react'
import { useState  } from 'react'
import "./Nav.css"
import {FaBars,FaTimes} from "react-icons/fa"
function Nav() {
  const [isOpen,SetIsOpen]=useState(false)
  function changeStatusOpen() {
    SetIsOpen(!isOpen)

  }
  return (
    <div className='nav-container'>
      <a href='#inicio'><img alt="logo hamaderas" className='logo-img' src="https://res.cloudinary.com/dpzlutln3/image/upload/v1686749327/Ha%20Maderas/2ea02620-611b-4963-a6d3-797a6942d3f1_jdrw4a.jpg" /></a>
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