import { useState, useEffect } from 'react'
import Product from '../components/Product'
import product from '../components/Product'
import './shop.css'

function Shop() {
  const [data, setData] = useState()

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=10', { method: 'GET' })
      setData(response.ok ? await response.json() : null)
    } catch (error) {
      console.log('ERROR YEDIN')
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='product'>
      <div className='product-body'>
        {data?.map((product) => {
          return <Product data={product} />
        })}
      </div>
    </div>
  )
}

export default Shop
