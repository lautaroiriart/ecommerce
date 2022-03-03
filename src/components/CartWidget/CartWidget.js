import React, {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../context/cartContext'
import {Link} from 'react-router-dom';

const CartWidget = () =>{
    const {cartCount} = useContext(cartContext);
    return(
        <div className="cart-container">
            <Link to="/cart">
                <ShoppingCartIcon />
                {cartCount}
            </Link>
        </div>
    )
}

export default CartWidget;