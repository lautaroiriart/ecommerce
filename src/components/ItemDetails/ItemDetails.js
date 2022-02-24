import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'


export default function ItemDetail({ data }) {

    const [cantidadProductos, setCantidadProductos] = useState (0);
    const [confirmarCompra, setConfirmarCompra] = useState(false)
    const agregarProductos = (cantidadProductosCount) => {
        setCantidadProductos(cantidadProductosCount)
    }
    
    const confirmacionCompra = (confirmacion) => {
        if (cantidadProductos>0){
            setConfirmarCompra(true)
        }
    }

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
            <ItemCount stock={data.stock} onAdd={(cantidadProductosCount)=>agregarProductos(cantidadProductosCount)}  compra={(confirmacion)=>confirmacionCompra(confirmacion)}/>  
        </div>
    )
}