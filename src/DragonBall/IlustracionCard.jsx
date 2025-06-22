import React from 'react'

function IlustracionCard(image) {
    // console.log(image);
    return (
        <div className="ilustracion">
            <img src={`${image.image}`} />
        </div>
    )
}

export default IlustracionCard
