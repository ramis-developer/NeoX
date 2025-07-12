import React, {createContext, useContext, useState} from 'react'

function CartContext() {
    const CartContext = createContext();
  return (
    <div className='CartContext'></div>
  )
}

export default CartContext