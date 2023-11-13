import { useContext, useEffect, useState } from 'react'
import './product.css'
import { ShopContext } from '../context/ShopContext'
import fetchProduct from '../services/productApi'

const setDefaultCart = async () => {
  const result = await fetchProduct()
  let cart = {}
  for (var i = 0; i < result.length; i++) {
    cart[i] = 0
  }
  console.log(typeof cart)
}

const Product = ({ data }) => {
  const [key, setKey] = useState()
  const { id, title, price, description, category, image, rating } = data
  const { addToCart } = useContext(ShopContext)

  setDefaultCart()

  return (
    <div className='product-card'>
      <div className='product-card-image'>
        <img src={image} />
      </div>
      <div className='product-card-body'>
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
      </div>
      <button onClick={() => addToCart(id)}>Add To Cart</button>
    </div>
  )
}

export default Product
