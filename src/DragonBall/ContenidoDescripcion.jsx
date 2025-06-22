import React from 'react'

 function ContenidoDescripcion({titulo,contenido}) {
  return (
    <div className='contenidoDescripcionDetalle'>
        <p>{titulo}</p>
        <span>{contenido}</span>
    </div>
  )
}
export default ContenidoDescripcion;