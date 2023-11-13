import { useState, useEffect } from 'react'
import Product from '../components/Product'
import fetchProduct from '../services/productApi'
import './shop.css'

function Shop() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProduct()
      setData(result)
    }
    fetchData()
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
