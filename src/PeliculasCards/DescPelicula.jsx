import React from 'react'

function DescPelicula({item}) {
    return (
        <div className="desc-body">
            <span className="title">{item.titulo}</span>
            <span>{item.info}</span>
        </div>
    )
}

export default DescPelicula;