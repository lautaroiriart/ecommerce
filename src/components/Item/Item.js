import React from 'react'

const Item = ({id,nombre,precio,stock,}) => {
    return(
        <div>
            <img src={`../../assets/vela${id}.jpg`} alt="product"></img>
            <p>Nombre: {nombre}</p>
            <p>Precio: {precio}</p>
        </div>
    )
}

export default Item;