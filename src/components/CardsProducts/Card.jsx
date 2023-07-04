import React,{useState} from 'react'
import Modal from '../Modal/Modal';
import ImageSlider from '../Slider 2/ImageSlider';
import ModalImageSlider from '../modalImageSlider/ModalImageSlider';
import {MdZoomOutMap} from "react-icons/md"

function Card({index,product}) {
    const [isOpen, SetIsOpen] = useState(false);
    const handleCardClick = () => {
        SetIsOpen(true);
      };
    
      const handleModalClose = () => {
        SetIsOpen(false)
      };

  return (
    <div className='card-product' key={index}>
    <div className="img-card-product-container"  
    onClick={handleCardClick}>
      <img src = {product.img} alt={`${product.title}`} className='img-card-product'/>
<span className='button-picture'><MdZoomOutMap/></span>
      </div>
      {product.images && 
       <Modal 
       isOpen={isOpen}
       handleModalClose={handleModalClose}>
            <ModalImageSlider slides={product.images}/>
           
       </Modal>
      }
         
         
      </div>
  )
}

export default Card