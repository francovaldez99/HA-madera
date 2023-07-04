import React from 'react'
import "./Productos.css"
import img1 from "../../assets/images/1.jpeg"
import img3 from "../../assets/images/image(3).jpeg"
import img2 from "../../assets/images/image(2).jpeg"
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
  title:"HA Madera: Elegancia y calidad en puertas con un toque sofisticado",
  text:"Nuestra empresa se enorgullece de ofrecerte puertas con un exquisito acabado y un alto grado de sofisticación. ¿Qué nos distingue? Nuestro compromiso con la calidad y la atención al detalle en cada etapa de producción."
  
},
{
url:img2,
title:"Soluciones de puertas para cada necesidad",
text:"Tenemos la solución perfecta para todas tus necesidades de puertas. Ya sea una puerta pivotante, resistente al fuego, acústica, de giro, corrediza, con visor o con ventilación en puertas shaft, ofrecemos una amplia variedad de opciones para adaptarnos a tus requerimientos específicos."
},
{
  url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075064/Ha%20Maderas/proyectos-11-1_x1opna.jpg",
  title:"Puertas macizas externas",
  text:"Atractivas y  diseñadas para resistir las condiciones climáticas más exigentes. Gracias a su construcción sólida y al uso de materiales resistentes al agua y a los cambios de temperatura, estas puertas conservan su belleza y funcionalidad a lo largo del tiempo."
},
{
  url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-9-6_f6tncy.jpg",
  title:"Zocalos",
  text:"Ofrecemos una amplia variedad de opciones en cuanto a colores, acabados y dimensiones, para que encuentres el zócalo que mejor se adapte a tus necesidades y preferencias estéticas. Ya sea que busques un estilo clásico y sobrio, o uno más moderno y vanguardista, nuestro zócalo te brinda la flexibilidad para lograr la apariencia deseada en tus espacios. "
},
]



  return (
    <section className='productos' id='productos'>
     <h2 className='productos-title' >NUESTROS PRODUCTOS</h2>

    
     <ImageSlider slides = {images}/>

   
    </section>

  )
}

export default Productos