import React, { useContext, useState,} from 'react';
import { cartContext } from '../../context/cartContext';


export default function AddProducts({data}) {


    const {cartCount, addItemCart, cartItems} = useContext(cartContext);

    const [itemCount, setItemCount] = useState(0)

    const addItem = () => {
        if(itemCount < data.stock){
            setItemCount(itemCount + 1)
        }
        
    }
    const removeItem = () => {
        if(itemCount > 0){
            setItemCount(itemCount - 1)
        } 
    }

    const shop = () => {
        return (
            <button>Finalizar compra</button>
        )
    }

    return (
        <>
        <h1>{itemCount}</h1>
        <button onClick={removeItem}>-</button>
        <button onClick={addItem}>+</button>
        <button onClick={()=>addItemCart(data.nombre, itemCount)}>Agregar al carrito</button>
        </> 
    )
}


/* MI IDEA ERA HACER LO SIGUIENTE 

    const shop = () => {
        return (
            <button>Finalizar compra</button>
        )
    }
    
    const counter = () =>{
        return(
                    <>
        <h1>{itemCount}</h1>
        <button onClick={removeItem}>-</button>
        <button onClick={addItem}>+</button>
        <br/>
        <button onClick={()=>onAdd(itemCount)}>Agregar al carrito</button>
        </> 
        )
    }


    y que el return abajo de la funcion sea 

    return(
        <>
                {
                    compra === false  ?
                    <counter/>
                    :
                    <shop/>
                }
        </>
    )
    */