import React from 'react'
import "./Productos.css"
import img1 from "../../assets/images/image(1).jpeg"
import img3 from "../../assets/images/image(3).jpeg"
import ImageSlider from '../Slider 2/ImageSlider'

function Productos() {
// const [CurrentImage,SetCurrentImage]=useState(0)
// const toggle=(i)=>{
//   if(i === CurrentImage)return
//   SetCurrentImage(i)
// }

const images= [

{
  url:img1,
  title:"Puerta de seguridad reforzada: Protege tu hogar con estilo",
  text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum nobis quasi consequatur amet eligendi saepe voluptatibus pariatur ducimus, excepturi eveniet vero harum delectus, itaque enim nam asperiores nemo eius!"
  
},
{
  url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-9-6_f6tncy.jpg",
  title:"Zocalos",
  text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
},
{
  url:img3,
  title:"Puerta acústica: Privacidad y confort en un solo producto",
  text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum nobis quasi consequatur amet eligendi saepe voluptatibus pariatur ducimus, excepturi eveniet vero harum delectus, itaque enim nam asperiores nemo eius!"
},
{
  url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075064/Ha%20Maderas/proyectos-11-1_x1opna.jpg",
  title:"Puerta corredera de cristal: Modernidad y luminosidad en tus espacios",
  text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum nobis quasi consequatur amet eligendi saepe voluptatibus pariatur ducimus, excepturi eveniet vero harum delectus, itaque enim nam asperiores nemo eius!"
}
]



  return (
    <section className='productos' id='productos'>
     <h2 className='productos-title' >NUESTROS PRODUCTOS</h2>
{/* 
    <p className='main-text'><strong> Explora nuestra amplia gama de opciones en blanco, beige, gris, negro e incluso en elegantes patrones de madera.<br />¡Encuentra la puerta ideal para tu espacio hoy mismo!</strong>
              </p> */}
    
     <ImageSlider slides = {images}/>

   
    {/* <button className='cta-button' id='conoce-nuestro-trabajo'>Conoce nuestro trabajo</button> */}
    </section>

  )
}

export default Productos