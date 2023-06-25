import React,{ useState} from 'react'
import "./Productos.css"
import img1 from "../../assets/images/1.jpeg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"

function Productos() {
const [CurrentImage,SetCurrentImage]=useState(0)
const toggle=(i)=>{
  if(i === CurrentImage)return
  SetCurrentImage(i)
}
const images= [

{
  url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1686941620/Ha%20Maderas/istockphoto-1452481428-612x612_arzxpl.jpg"
},
{
  url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1686941620/Ha%20Maderas/istockphoto-1452481428-612x612_arzxpl.jpg"
},
{
  url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1686941620/Ha%20Maderas/istockphoto-1452481428-612x612_arzxpl.jpg"
}
]



  return (
    <section className='productos'>

      <article className='images-products'>
          <img
           src={ images[CurrentImage].url }
             className='image-main-product'
              alt='main-product'/>
      
          <div className='list-image-products' >
                {
                  images.map((image,index)=>{
                  if(index<4){ 
                    return (
                      <img
                          src={image.url}
                          key={index}
                          alt={image.url}
                          onClick={()=>toggle(index)}
                          className='image-from-list-product'
                          />
                  )}else return null
                        
                  })
                }
          </div>
        
      </article>
      <article className='text-products'>
        
        <h2 className='productos-title'>CONOCÉ NUESTROS PRODUCTOS</h2>
        <p className='productos-text'>Trabajamos con una línea de productos diversificada, que incluye los modelos Granero, Agitador, Patio, Eje, Ventilado, así como zócalos. ¡Compruébalo!</p>
        <button className='cta-button'>
          Ver productos
        </button>
      </article>
    </section>

  )
}

export default Productos