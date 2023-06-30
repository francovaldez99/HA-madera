import React,{useState} from 'react'
import "./CardsProducts.css"
import img from "../../assets/images/3.jpg"
import Modal from '../Modal/Modal';
import ImageSlider from "../Slider 2/ImageSlider"
import img1 from "../../assets/images/2.jpg"
import img2 from '../../assets/images/3.jpg'
import img3 from "../../assets/images/1.jpeg"
import trabajo1 from "../../assets/images/Trabajo-realizado(1).jpeg"
import trabajo2 from "../../assets/images/Trabajo-realizado(1)-(2).jpeg"


export default function CardsProducts() {
    const [ ShowAll,SetShowAll ] = useState(false);
    const [isOpen, SetIsOpen] = useState(false);
    const handleCardClick = () => {
        SetIsOpen(true);
      };
    
      const handleModalClose = () => {
        SetIsOpen(false);
      };
    const products = [
        {
            title :"Titulo 1 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-17-1_cj8lbl.jpg",
            content:{
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi totam vero dolores eum facere reprehenderit quidem excepturi architecto repellendus aliquid ipsam nam veritatis quam voluptatibus quasi, id, dolore quod.",
            images : []
            }
        },
        {
            title :"Titulo 2 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075061/Ha%20Maderas/proyectos-13-1_dr5ugh.jpg"
        },
        {
            title :"Titulo 3 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075061/Ha%20Maderas/proyectos-14-1_wmx44h.jpg"
        },
        {
            title :"Titulo 4 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075062/Ha%20Maderas/proyectos-15-3_icub2c.jpg"
        },
          {
            title :"Titulo 5 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-2-1_bzoqfe.jpg"
        },
        ,
          {
            title :"Titulo 6 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075067/Ha%20Maderas/proyectos-6-1_ayqxjk.jpg"
        },
        {
          title :"Titulo 7",
          img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-12-1_dun39c.jpg"
      },
      {
        title :"Titulo 8",
        img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-9-2_rg1jmr.jpg"
    }
    ]
    const images= [

        {
          url:img1
        },
        {
          url:img2
        },
        {
          url:img3
        }
        ]
  return (
    <section className='section-cards-products'>
          <h2>Conocé Nuestro trabajo</h2>
                <div className={`container-product ${ShowAll ? "show-products":""}`}>
                    {products &&
                        products.map((product, index)=> {
                            return (
                            <div className='card-product' key={index}>
                      
                              <div className="img-card-product-container"  onClick={handleCardClick}>
                                    {/* <h3 className='title-card-product' 
                                   >{product.title}</h3> */}
                                <img src = {product.img} alt={`${product.title}`} className='img-card-product'/>
                                </div>
                                
                                    <Modal 
                                    isOpen={isOpen}
                                    handleModalClose={handleModalClose}>
                                    <div>
                                        <ul>
                                        <li>Material: [Material de alta calidad]. Esta puerta ofrece durabilidad, resistencia y un aspecto elegante para complementar tu hogar.</li>

<li>Medidas: Disponible en una amplia variedad de tamaños estándar y también ofrecemos opciones de medidas personalizadas para adaptarnos perfectamente a tus necesidades.</li>
<li>
  
  Colores: ¡Elige entre una amplia gama de colores para personalizar tu puerta según tus preferencias y el estilo de tu hogar! Desde tonos clásicos hasta opciones modernas y vibrantes, tenemos el color perfecto para ti.
</li>

<li>Seguridad: Nuestra puerta está diseñada con características de seguridad adicionales, como [mencionar características específicas], brindándote tranquilidad y protección para tu hogar y seres queridos.</li>

<li>Resistencia a las condiciones climáticas: Esta puerta está construida para resistir las inclemencias del tiempo, garantizando su durabilidad y manteniendo su aspecto impecable incluso en condiciones adversas.</li>

<li>Fácil instalación: Con instrucciones claras y un diseño pensado para facilitar la instalación, nuestra puerta se puede montar rápidamente sin complicaciones.</li>

<li>Mantenimiento sencillo: Nuestra puerta de [material] es fácil de limpiar y mantener. Con un simple cuidado regular, se mantendrá en excelentes condiciones durante mucho tiempo.</li>

<li>Versatilidad: Ideal para diversas áreas de tu hogar, ya sea la entrada principal, patio, balcón u otras zonas. Esta puerta se adapta perfectamente a diferentes espacios y estilos de decoración.</li>

                                        </ul>
                                        <button className='cta-button' onClick={()=>console.log("anda el botn")}>
                                            Consultar disponibilidad
                                        </button>
                                        {/* <ImageSlider slides={images}/> */}

                                    </div>
                                    </Modal>
                                </div>)
                        })
                    }
                    
                </div>       
                
    </section>
  )
}
