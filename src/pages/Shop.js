import { useState, useEffect } from 'react'
import Product from '../components/Product'
import product from '../components/Product'

function Shop() {
  const [data, setData] = useState()

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=5', { method: 'GET' })
      setData(response.ok ? await response.json() : null)
    } catch (error) {
      console.log('ERROR YEDIN')
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      {data &&
        data.map((product) => {
          return <Product data={product} />
        })}
    </>
  )
}

export default Shop
