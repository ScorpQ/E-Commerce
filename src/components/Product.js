import { useState } from 'react'
import './product.css'

const Product = ({ data }) => {
  const [key, setKey] = useState()
  const { id, title, price, description, category, image, rating } = data

  const addBacket = () => {
    setKey(data)
  }

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
      <button data-index={id} onClick={addBacket}>
        Add To Cart
      </button>
    </div>
  )
}

export default Product
