import React from 'react'
import "./Inicio.css"
import video2 from "../../assets/Diseño sin título.mp4"
function Inicio() {
 
  return (
    <>
      <main >
          <div style={{position:"relative",top:"0",bottom:"0",height:"100vh",width:"100%",background:"linear-gradient(rgba(5,7,12,0.75),rgba(5,7,12,0.75))"}} >
      <video src={video2} width="100%" height="100%" style={{objectFit:"cover"}} autoPlay muted loop/>
          </div>
          <article className='inicio-text-container'>
              <h1 className='main-title'>PROVISIÓN Y MONTAJES</h1>
              <p className='main-text'><strong>Descubre los impresionantes modelos del Kit Puerta Lista, perfectos para crear ambientes interiores excepcionales.<br /> Explora nuestra amplia gama de opciones en blanco, beige, gris, negro e incluso en elegantes patrones de madera.<br />¡Encuentra la puerta ideal para tu espacio hoy mismo!</strong>
              </p>
              <button className='cta-button' id='mas-informacion'>
                  ¡ Contactanos !
              </button>
          </article>
          </main>
    </>
  )
}

export default Inicio