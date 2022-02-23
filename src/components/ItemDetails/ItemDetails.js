import React from 'react'

export default function ItemDetail({ data }) {

    console.log (data)
    return (
        <div>
            <div>
            <img src={`../../assets/vela`} alt="product" />  
            </div>
            <span>Nombre: {data.nombre}</span>
            <p>Stock: {data.stock}</p>
            <p>Precio: {data.precio}</p>
            <p>Descripcion: {data.description}</p>
        </div>
    )
}