import React from 'react'
import '../CSS/DBZ.css'
import IlustracionCard from './IlustracionCard.jsx'
import EncabezadoDescripcion from './EncabezadoDescripcion';
import ContenidoDescripcion from './ContenidoDescripcion';

function CardDBZ({item}) {
  //console.log(item);
  return (
    <div className="card">
      <IlustracionCard image={item.image}/>
      <div className="descripcion">
          <EncabezadoDescripcion nombre={item.name} raza={item.race} genero={item.gender}></EncabezadoDescripcion>

          <div className='contenidoDescripcion'>
            <ContenidoDescripcion titulo={"Base KI: "} contenido={item.ki}></ContenidoDescripcion>
            <ContenidoDescripcion titulo={"Total KI: "} contenido={item.maxKi}></ContenidoDescripcion>
            <ContenidoDescripcion titulo={"Afiliacion: "} contenido={item.affiliation}></ContenidoDescripcion>
          </div>

      </div>
    </div>
  )
}
export default CardDBZ;