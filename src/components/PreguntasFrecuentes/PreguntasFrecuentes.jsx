import React from 'react'
import Acordean from './Acordeon'
import "./PreguntasFrecuentes.css"
function PreguntasFrecuentes() {
  const data = [
    {
      title: "¿Qué tipos de puertas ofrecen?",
      content: "Ofrecemos una amplia variedad de puertas, incluyendo puertas de madera, puertas de vidrio, puertas de acero y puertas corredizas. También contamos con opciones personalizadas para adaptarnos a tus necesidades específicas."
    },
    {
      title: "¿Cuál es el tiempo de entrega?",
      content: "El tiempo de entrega varía dependiendo del tipo de puerta y la ubicación. Por lo general, nuestro tiempo de entrega estándar es de 2 a 4 semanas. Sin embargo, te proporcionaremos una estimación más precisa al momento de hacer tu pedido."
    },
    {
      title: "¿Ofrecen servicios de instalación?",
      content: "Sí, ofrecemos servicios de instalación profesional para asegurarnos de que tu puerta sea colocada correctamente. Nuestro equipo de instaladores capacitados se encargará de todo el proceso, desde la preparación hasta la instalación final."
    }
  ]
  return (
    <div className='area-preguntas-frecuentes'>
      <div className='preguntas-frecuentes' id='preguntas-frecuentes'>
          <h2 className='preguntas-frecuentes-h2'>PREGUNTAS FRECUENTES</h2>
          <p>¿Tenes una pregunta? Tenes una respuesta, si Tenes otra consulta podes contactarte por WhatsApp con el equipo.</p>
          <Acordean data={data}/>
      </div>
    </div>
  )
}

export default PreguntasFrecuentes