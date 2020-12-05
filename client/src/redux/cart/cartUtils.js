export const addItemToCart = (cartItems, addItemToCart) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === addItemToCart.id)

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === addItemToCart.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...addItemToCart, quantity: 1 }]
}

export const removeItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id)


    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    return cartItems.map(cartItem => {
        return cartItem.id === itemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    })
}