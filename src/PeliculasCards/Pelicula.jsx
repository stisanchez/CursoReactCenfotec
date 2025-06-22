import React from 'react'
import '../CSS/primerosCards.css'
import Autor from './Autor'
import DescPelicula from './DescPelicula'
import EncabezadoCard from './EncabezadoCard'

function Pelicula({item}) {
    return (
        <div className="card">
            <div className="ilustracion">
                <img src={`${item.imgPortada}`}/>
            </div>
            <div className="descripcion">
                <EncabezadoCard/>
                <DescPelicula item={item}/>
                <Autor item={item}/>
            </div>
        </div>
    )
}

export default Pelicula;