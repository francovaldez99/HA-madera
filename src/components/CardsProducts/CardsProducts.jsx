import React,{useState} from 'react'
import "./CardsProducts.css"
import Modal from '../Modal/Modal';
import ImageSlider from '../Slider 2/ImageSlider';
import Card from './Card';


export default function CardsProducts() {

   
    const products = [
      {
            title :"Titulo 1 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-17-1_cj8lbl.jpg",
            images : [
              {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-17-1_cj8lbl.jpg"},
          
            ]
        },
        {
            title :"Titulo 2 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075061/Ha%20Maderas/proyectos-13-1_dr5ugh.jpg",
            images : [
              {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075061/Ha%20Maderas/proyectos-13-3_yaswwd.jpg"},
              {url : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075061/Ha%20Maderas/proyectos-13-2_w6s4dz.jpg"}
            ]
        },
        {
            title :"Titulo 3 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075061/Ha%20Maderas/proyectos-14-1_wmx44h.jpg",
            images:[{url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075061/Ha%20Maderas/proyectos-14-1_wmx44h.jpg"}]
       
        },
        {
            title :"Titulo 4 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075062/Ha%20Maderas/proyectos-15-3_icub2c.jpg",
            images : [
              {url :"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075062/Ha%20Maderas/proyectos-15-5_bez8ri.jpg"},
              {url : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075062/Ha%20Maderas/proyectos-15-3_icub2c.jpg"}
            ]
        },
          {
            title :"Titulo 5 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-2-1_bzoqfe.jpg",
            images : [
              {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075061/Ha%20Maderas/proyectos-1-1_pnmjs9.jpg"},
              {url : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075062/Ha%20Maderas/proyectos-2-2_wzipni.jpg"},
              {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688412127/Ha%20Maderas/2b0de579-1d3a-4444-a5e7-07cf8e37eb06_iqedcx.jpg"},
              {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688412109/Ha%20Maderas/e9c64d2e-7fd0-4337-85a2-822d30e1fab8_lzoimk.jpg"},
              {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075067/Ha%20Maderas/proyectos-3-3_vin97q.jpg"}

           
            ]
        },
          {
            title :"Titulo 6 ",
            img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075067/Ha%20Maderas/proyectos-6-1_ayqxjk.jpg",
            images:[
              {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075067/Ha%20Maderas/proyectos-6-1_ayqxjk.jpg"},
              {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075067/Ha%20Maderas/proyectos-6-3_qthngj.jpg"},
              {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075067/Ha%20Maderas/proyectos-6-2_ytmhne.jpg"}
            ]
           
        },
        {
          title :"Titulo 7",
          img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-12-1_dun39c.jpg",
          images : [
            {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-12-1_dun39c.jpg"},
         
          ]
      },
      {
        title :"Titulo 8",
        img : "https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-9-2_rg1jmr.jpg",
        images:[
          {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-9-2_rg1jmr.jpg"}
        ]
       
    },
    {
      img:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075062/Ha%20Maderas/proyectos-11-4_rhq4hk.jpg"
      ,images:[
        {
          url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075062/Ha%20Maderas/proyectos-11-4_rhq4hk.jpg"
        },
        {
          url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075062/Ha%20Maderas/proyectos-11-2_tizdma.jpg"
        },
        {
          url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-11-3_kqlha3.jpg"
        },
      ]
    },
    {
      img:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-18-1_qjf7yk.jpg",
      images:[
        {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-18-1_qjf7yk.jpg"},
        {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-15-4_s7sxp0.jpg"}
      ]
    },
    {
      img:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-8-7_cusvj4.jpg"
      ,images:[
        {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075066/Ha%20Maderas/proyectos-8-7_cusvj4.jpg"},

      ]
    },
    {
      img:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-5-1_umiipp.jpg",
      images:[
        {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075063/Ha%20Maderas/proyectos-5-1_umiipp.jpg"},
        {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075067/Ha%20Maderas/proyectos-5-5_dwc9lb.jpg"},
        {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075067/Ha%20Maderas/proyectos-5-3_hd0efp.jpg"},
        {url:"https://res.cloudinary.com/dpzlutln3/image/upload/v1688075067/Ha%20Maderas/proyectos-5-2_vbrn5f.jpg"}
      ]
    }
    
    ]

  return (
    <section className='section-cards-products'>
          <h2 id='nuestro-trabajo'>Conocé Nuestro trabajo</h2>
                <div className={`container-product `}>
                    {products &&
                        products.map((product, index)=> {
                            return (
                              <Card index={index} product={product} key={index} />
                            )
                        })
                    }
                    
                </div>       
                
    </section>
  )
}
