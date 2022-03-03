import React, {useContext, useState} from 'react';

export const cartContext =  React.createContext();

export const useCartContext = () => useContext(cartContext);

export const CustomContext = ({children}) => {
    
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemCart = (item, quantity) => {
        if (cartItems.some((product) => product.id === item.id)) {
            const copy = [...cartItems];
            const repeatItemIndex = cartItems.findIndex(
              (product) => product.id === item.id
            );
            copy[repeatItemIndex] = {
              ...copy[repeatItemIndex],
              quantity: copy[repeatItemIndex].quantity + quantity,
            };
      
            setCartItems(copy);
            setCartCount((prev) => prev + quantity);

          } else {
            setCartItems([...cartItems, {item:item, quantity:quantity}]);
            setCartCount((prev) => prev + quantity);
          }}
        
        const clearCart = () => {
            setCartItems ([])
        }

        return(
        <cartContext.Provider value={{ cartItems, cartCount, addItemCart, clearCart}} >
            {children}
        </cartContext.Provider>
    )
}
