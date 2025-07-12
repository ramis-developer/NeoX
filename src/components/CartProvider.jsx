import React, { Children, useState } from 'react'
import CartContext from './CartContext';

function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems((tovar) => {
            const isProduct = tovar.find(item => item.id === product.id);
            if (isProduct) {
                return tovar.map(item => item.id === product.id ? {...item, quantity: + 1} :item
                )
            } else{
                return[...tovar, {...product, quantity: 1}];
            }
        } )
    }
    const removeFromCart = (product) => {
        setCartItems((tovar) => tovar.filter(item => item.id !== productId))
    };
    const clearCart = () => setCartItems([])

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart, totalItems}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider