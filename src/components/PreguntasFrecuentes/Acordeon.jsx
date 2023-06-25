import React,{ useState } from 'react'
import "./Acordeon.css"
import {MdOutlineKeyboardArrowUp,MdOutlineKeyboardArrowDown} from "react-icons/md"
function Acordean({data}) {
  const [selected , SetSelected]=useState(0)
  return (
    <div className="accordion-container">
      {
        data.map((element, index)=>{
          return (
            <div key={index} className='item'>
              <div className='acordeon-title' onClick={()=>SetSelected(index)}>
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