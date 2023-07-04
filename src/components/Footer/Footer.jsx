import React from 'react';
import logo from "../../assets/Logo.svg"
import './Footer.css'
import {GrFacebook , GrInstagram } from "react-icons/gr"
import { BsWhatsapp } from "react-icons/bs"
const Footer = () => {
  return (
    <footer >
      <hr />
      <div className="container">
        
        
<h4 className='footer-item'> <img src={logo} height="100px"  alt='logo' /></h4>
        <h4 className='footer-item'><a href="https://www.facebook.com/profile.php?id=100092695235913" target="_blank" without rel="noreferrer"><span><GrFacebook/></span> Facebook</a></h4>
       <h4 className='footer-item'><a href="https://www.instagram.com/hamaderas.py/" target="_blank" without rel="noreferrer"><span><GrInstagram/></span> Instagram</a></h4>

       <h4 className='footer-item'><a  target='_blank' href='https://api.whatsapp.com/send/?phone=595981800114'  without rel="noreferrer"><span><BsWhatsapp/></span> Whatsapp</a></h4>
        <h4 className='footer-item'><a href="#preguntas-frecuentes" >Ayuda</a></h4>
        <h4 className='footer-item'><a href="#contactanos">Contacto</a></h4>  
      </div>
       
      
    </footer>
  );
}

export default Footer;
