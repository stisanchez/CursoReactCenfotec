import React from 'react'

function Autor({item}) {
    return (
        <div className="desc-owner">
            <div className="desc-owner-img">
                <img src={`${item.LogoAutor}`} />
            </div>
            <div className="desc-owner-desc">
                <span className="owner">{item.NombreAutor}</span>
                <span className="position">{item.TituloAutor}</span>
            </div>
        </div>
    )
}

export default Autor;
