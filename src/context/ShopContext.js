import { useState, createContext, useEffect } from 'react'
import fetchProduct from '../services/productApi'

export const ShopContext = createContext()

export const Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await fetchProduct()
      return result
    }

    const setDefaultCart = async () => {
      const counter = await getData()
      let cart = {}
      for (var i = 0; i < counter.length; i++) {
        cart[i] = 0
      }
      setCartItems(cart)
    }

    setDefaultCart()
  }, [])

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const contextValue = { cartItems, addToCart, removeToCart }
  console.log(cartItems)
  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}

export default Provider
