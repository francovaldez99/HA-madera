import React,{useState , useRef } from "react";
import "./ContactMe.css";
import { AiOutlinePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import {FaCheck} from "react-icons/fa";
import emailjs from "@emailjs/browser"

function Loader() {
  return (
    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" xmlSpace="preserve">
      <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
      <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
        C22.32,8.481,24.301,9.057,26.013,10.047z">
        <animateTransform attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 20 20"
          to="360 20 20"
          dur="0.5s"
          repeatCount="indefinite"/>
      </path>
    </svg>
  );
}

const ContactMe = () => {
  const [Clicked, SetClicked] = useState(false)
  const form = useRef();
  const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID =process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const handlerSubmit = (e)=>{
    e.preventDefault()
    SetClicked(true)
    setTimeout(() => {
      SetClicked(false)
    }, 1000);
    if (!YOUR_PUBLIC_KEY || !YOUR_SERVICE_ID || !YOUR_TEMPLATE_ID) {
      console.log("variable de entorno no encontrado");
    return;
    }
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);

        form.current.reset();

    }, (error) => {
        console.log(error.text);
    });
  }
  

  return (
    <>
      {/* <h2 className='contact-title'>Contactanos</h2> */}
      <div className="contact-container">
        <article className="contact-area-text" id="contactanos"> 
          <div>
            <h2>
              ¡Contáctanos ahora mismo para recibir asesoramiento y obtener un
              presupuesto para tu proyecto! 
            </h2>
          </div>

        
          <div>
            <h3>
              <AiOutlinePhone /> +54 9 1011121314
            </h3>
          </div>
            <div>
              <h3>
                <AiOutlinePhone /> +54 9 12345679
              </h3>
            </div>
          <div>
            <h3>
              
              <a href="#" target="_blank" rel="noreferrer" className="cta-button wsp" style={{textAlign:"center"}}><BsWhatsapp />   Contactanos por whatsapp</a>
            </h3>
          </div>
        </article>

        <form ref={form} className="contact-area-form" onSubmit={handlerSubmit}>
          <h2>Envianos un mail</h2>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="user_name" required/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  name="user_email" required/>
          </div>

          <div>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="message" required maxLength="500"></textarea>
          </div>
          <button className="cta-button" type="submit">{Clicked ? <Loader/> :"Enviar"}</button>
          <div>
          {/* <h3 className="mensaje-click"><FaCheck/>Email enviado</h3> */}
        </div>
        </form>
        
      </div>
    </>
  );
};

export default ContactMe;
