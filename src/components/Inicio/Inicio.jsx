import React from 'react'
import "./Inicio.css"
import video2 from "../../assets/Diseño sin título.mp4"
import {BsWhatsapp} from "react-icons/bs"
function Inicio() {
 
  return (
    <>
      <main >
          <div style={{position:"relative",top:"0",bottom:"0",height:"100vh",width:"100%"}} className='video-container'>
      <video src={video2} 
      width="100%"
       height="100%"
        style={{objectFit:"cover"}}
         autoPlay muted loop/>
          </div>
          <article className='inicio-text-container'>
              <div>
                <h1 className='main-title'>HA Maderas</h1>
                 <h5>PROVISIÓN Y MONTAJES</h5>
              </div>
              <a className='cta-button inicio-cta-button' id='mas-informacion' href='#contactanos'>
                  ¡ Contactanos !
              </a>
          </article>
          </main>
          <a className='btn-whatsapp' href='https://api.whatsapp.com/send/?phone=595981800114' target="_blank" without rel="noreferrer"><BsWhatsapp/></a>
    </>
  )
}

export default Inicio