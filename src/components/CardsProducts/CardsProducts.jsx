import React,{useState} from 'react'
import "./CardsProducts.css"
import img from "../../assets/images/3.jpg"
import Modal from '../Modal/Modal';
import ImageSlider from "../Slider 2/ImageSlider"
import img1 from "../../assets/images/2.jpg"
import img2 from '../../assets/images/3.jpg'
import img3 from "../../assets/images/1.jpeg"

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
            img : img,
            content:{
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi totam vero dolores eum facere reprehenderit quidem excepturi architecto repellendus aliquid ipsam nam veritatis quam voluptatibus quasi, id, dolore quod.",
            images : []
            }
        },
        {
            title :"Titulo 2 ",
            img : "img"
        },
        {
            title :"Titulo 3 ",
            img : img
        },
        {
            title :"Titulo 4 ",
            img : img
        },
          {
            title :"Titulo 5 ",
            img : img
        },
        ,
          {
            title :"Titulo 6 ",
            img : img
        },
        {
          title :"Titulo 7",
          img : img
      },
      {
        title :"Titulo 8",
        img : img
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

                <div className={`container-product ${ShowAll ? "show-products":""}`}>
                    {products &&
                        products.map((product, index)=> {
                            return (
                            <div className='card-product' key={index}>
                                    <img src={"https://res.cloudinary.com/dpzlutln3/image/upload/v1686941620/Ha%20Maderas/istockphoto-1452481428-612x612_arzxpl.jpg"} alt={product.title}  className='img-card-product' />
                                    <h3 className='title-card-product' 
                                    onClick={handleCardClick}>{product.title}</h3>
                                    <Modal 
                                    isOpen={isOpen}
                                    handleModalClose={handleModalClose}>
                                    <div>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum sunt vero error modi mollitia ipsa debitis enim ab aliquid inventore! Nesciunt labore error harum voluptatum temporibus ducimus numquam, voluptate pariatur!

                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illum deserunt nobis, at eius atque molestias, impedit tempora nostrum hic nihil itaque labore animi fuga architecto maiores minima praesentium dicta!

                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sint voluptatem enim quod quo molestias corporis possimus ducimus magni. Aperiam voluptatum totam consectetur a quas repudiandae accusantium cum quod suscipit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat perferendis, nisi ad error cum officiis repellendus consectetur qui quam nobis illum facilis delectus similique porro accusamus placeat ullam quos optio?
                                        
                                          
                                        </p>
                                        <button className='cta-button'>
                                            Consultar disponibilidad
                                        </button>
                                        <ImageSlider slides={images}/>

                                    </div></Modal>
                                </div>)
                        })
                    }
                </div>       
                    <button className='cta-button' id='button-mostrar-mas' onClick={()=>SetShowAll(!ShowAll)} >{ShowAll ? "Mostrar Menos!":"Mostrar Mas!"}</button>
    </section>
  )
}
