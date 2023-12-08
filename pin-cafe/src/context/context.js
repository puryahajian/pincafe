import { createContext, useState } from "react";

export const BuyContext = createContext(null);

export const BuyContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) =>{
        setCartItems(prev => [...prev, item])
    }

    const removeFromCart = (itemId) => {
        const findIndexcart = cartItems.findIndex(a=>a.id == itemId)
        const allCart = [...cartItems];
        allCart.splice(findIndexcart, 1);
        setCartItems(allCart);
    }
    

    const contextValue = {cartItems, addToCart, removeFromCart}
    return <BuyContext.Provider value={contextValue}>{props.children}</BuyContext.Provider>

}
