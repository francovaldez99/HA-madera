import React,{ useState } from 'react'
import "./Acordeon.css"
import {MdOutlineKeyboardArrowUp,MdOutlineKeyboardArrowDown} from "react-icons/md"
function Acordean({data}) {
  const [selected , SetSelected]=useState(10000)
  const changeSelectedAcorden =(index)=>{
    if(selected === index)SetSelected(false);
    else SetSelected(index)
  }
  return (
    <div className="accordion-container">
      {
        data.map((element, index)=>{
          return (
            <div key={index} className='item'>
              <div className='acordeon-title' onClick={()=>changeSelectedAcorden(index)} >
                      <h2>{element.title}</h2> <span>{selected ===index ? <MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>}</span>
              </div>
              <div className={`acorden-content ${selected === index ? "active":""}`}><p>{element.content}</p></div>
            </div>
          )



        })
      }
    </div>
  )
}

export default Acordean