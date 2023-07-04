import React from "react";
import "./Modal.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Modal({ children , isOpen, handleModalClose }) {
    
  return (
    <>
    {
        isOpen && 
        <div className="overlay" >
          <div className="contenedor-modal">
            <div className="contenido-modal">
              {children}
            </div>
            <div className="contenedor-boton-cerrar-modal">
              <button className="boton-cerrar-modal"  onClick={handleModalClose}>
                <span >
                  <AiFillCloseCircle />
                </span>
              </button>
            </div>
          </div>
        </div>
    }
    </>
  );
}

export default Modal;
