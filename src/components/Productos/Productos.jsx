import React,{ useState} from 'react'
import "./Productos.css"
import img1 from "../../assets/images/image(1).jpeg"
import img2 from "../../assets/images/image(2).jpeg"
import img3 from "../../assets/images/image(3).jpeg"
import ImageSlider from '../Slider 2/ImageSlider'

function Productos() {
const [CurrentImage,SetCurrentImage]=useState(0)
const toggle=(i)=>{
  if(i === CurrentImage)return
  SetCurrentImage(i)
}
const images= [

{
  url:img1,
  
},
{
  url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-9-6_f6tncy.jpg"
},
{
  url:img3
},
{
  url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075064/Ha%20Maderas/proyectos-11-1_x1opna.jpg"
}
]



  return (
    <section className='productos'>
     <h2 className='productos-title'>NUESTROS PRODUCTOS</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur nihil ullam cum omnis accusantium, dolorum eius magni, quisquam iure, ut quibusdam nostrum delectus a blanditiis harum cumque unde natus!</p>

    
     <ImageSlider slides = {images}/>

   
    {/* <button className='cta-button' id='conoce-nuestro-trabajo'>Conoce nuestro trabajo</button> */}
    </section>

  )
}

export default Productos