import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetails/ItemDetails';
import {useParams} from 'react-router-dom';
import { productosBaseDeDatos } from '../../datos/ProductosBaseDeDatos';

export default function ItemDetailContainer() {
    const {id}= useParams();
    const [product, setProduct] = useState([]);

    const getProductDB = (nombreProducto) => { 
        return new Promise ((resolve, reject) =>{

        const arregloProductosBaseDeDatos = productosBaseDeDatos;
        const productoElegido = arregloProductosBaseDeDatos.find((elemento)=>elemento.id === nombreProducto)

        setTimeout( () => {
            resolve(productoElegido)
        }, 2000)
    })
    }
    
    useEffect( () => {
        const getProduct = async(id) => {
            const response = await getProductDB (id);
            setProduct(response)
        }
        getProduct(id);
    }, [id])

    return (
        <ItemDetail  data = {product}  />
        
    )
    
}