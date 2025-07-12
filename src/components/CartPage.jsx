import React, { useState } from 'react'

function CartPage() {
    const {cartItems, removeFromCart, clearCart} = useState();

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className='cart-page'>
        <h1>Корзина</h1>
        {cartItems.length === 0 ? (
            <p>Корзина пуста</p>
        ): (
            <>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name} - {item.quantity} шт.</span>
                        <span>{item.price * item.quantity} сом</span>
                        <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
            <p><strong>Общая сумма: {totalPrice} сомов</strong></p>
            <button onClick={clearCart}>Очистить корзину</button>
            <button>Оформить заказ</button>
            </>
        )}
    </div>
  )
}

export default CartPage