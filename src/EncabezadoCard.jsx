import React from 'react'
import { FaCalendarAlt } from "react-icons/fa"

function EncabezadoCard() {
    return (
        <div className="desc-header">
            <div>
                <FaCalendarAlt />
                <span>12.03.2022</span>
            </div>
            <span className="tipo-anuncio">Blogger</span>
        </div>
    )
}

export default EncabezadoCard;
