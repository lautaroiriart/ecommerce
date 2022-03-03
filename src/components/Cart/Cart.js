import React, { useContext } from 'react';
import { cartContext } from "../../context/cartContext";

const Cart = () => {
    const {cartItems, clearCart} = useContext(cartContext)
    return(
        <>
        {cartItems.lenght === 0 ?
        (<p>Carrito vacio</p>)
        :
        (
        cartItems.map((i)=>{
            console.log(i); 
            return(
                <>
                <p>{i.item} x {i.quantity}</p>
                </>
            )
        }
        )
        )
    }
    <button onClick={()=>clearCart()}>Limpiar el carrito</button>
        </>
    )
}

export default Cart ;