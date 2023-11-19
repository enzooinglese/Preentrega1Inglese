import { createContext, useContext, useState } from "react"

const CartContext = createContext({
    cart: [],
    addItem: () => {},
    isInCart: () => {},
    removeItem: () => {},
    clearCart: () => {},
    totalQuantity: 0,
    totalPrice: 0
})

export const CartProvider = ({ children }) => {
    const [cart,setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart(prev => [...prev, productToAdd])
        }else{
            console.log('el producto ya esta agregado')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.count
        })
        return totalQuantity
    }
    
    const totalQuantity = getTotalQuantity()

    const clearCart = () =>{
        setCart([])
    }

    const getTotalPrice = () => {
        let totalPrice = 0

        cart.forEach(prod => {
            totalPrice += prod.price * prod.count
        })
        return totalPrice
    }
    
    const totalPrice = getTotalPrice()

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, totalQuantity, totalPrice , clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    return useContext(CartContext)
}