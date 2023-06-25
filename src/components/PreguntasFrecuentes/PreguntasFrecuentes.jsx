import React from 'react'
import Acordean from './Acordeon'
import "./PreguntasFrecuentes.css"
function PreguntasFrecuentes() {
  const data = [
    {title : "Titulo 1 ",
  content :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae! Sint, saepe ratione. Impedit, sed blanditiis et dicta ab nisi qui reprehenderit ipsum, eveniet vel hic repellendus explicabo a quasi."},
  {
    title : " Titulo 2 ",
    content :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed obcaecati, vel inventore rem iusto delectus provident a debitis, sequi voluptates! Adipisci temporibus deleniti ad atque quo dicta impedit necessitatibus."
  },
  {title: " Titulo 3 ",
  content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed obcaecati, vel inventore rem iusto delectus provident a debitis, sequi voluptates! Adipisci temporibus deleniti ad atque quo dicta impedit necessitatibus."

  }
  ]
  return (
    <div className='preguntas-frecuentes'>
        <h2>PREGUNTAS FRECUENTES</h2>
        <p>¿Tenes una pregunta? Tenes una respuesta, si Tenes otra consulta podes contactarte por WhatsApp con el equipo.</p>
        <Acordean data={data}/>

    </div>
  )
}

export default PreguntasFrecuentes