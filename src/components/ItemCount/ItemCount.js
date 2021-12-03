import React, { useState,useEffect } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

export default function AddProducts({stock}) {

    const [itemCount, setItemCount] = useState(0)

    const addItem = () => {
        if(itemCount < stock){
            setItemCount(itemCount + 1)
        }
        
    }
    const removeItem = () => {
        if(itemCount > 0){
            setItemCount(itemCount - 1)
        }
        
    }
    return (
        <div>
            <h1>{itemCount}</h1>
            <button onClick={addItem}>+</button>
            <button onClick={removeItem}>-</button>
        </div>
    )
}