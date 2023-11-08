import { useState, useEffect } from 'react'

function Shop() {
  const [data, setData] = useState()

  useEffect(() => {
    const getFromApi = async () => {
      try {
        await fetch('https://fakestoreapi.com/products', { method: 'GET' })
          .then((res) => res.json())
          .then((json) => console.log(json))
      } catch (error) {
        console.log('ERROR YEDIN')
      }
    }
    getFromApi()
  }, [])

  return <></>
}

export default Shop
