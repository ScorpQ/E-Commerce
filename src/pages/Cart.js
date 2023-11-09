import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function Cart() {
  const product = useContext(ShopContext)

  console.log(product)
  return <h1>Cart </h1>
}

export default Cart
