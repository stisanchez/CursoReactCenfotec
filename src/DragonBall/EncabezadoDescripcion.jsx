import React from 'react'

function EncabezadoDescripcion({ nombre, raza, genero }) {
    return (
        <div className='encabezado'>
            <h2>{nombre}</h2>
            <p>{raza} - {genero}</p>
        </div>
    )
}

export default EncabezadoDescripcion;
