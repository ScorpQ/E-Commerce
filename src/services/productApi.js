const fetchProduct = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=10', { method: 'GET' })
    return response.ok ? await response.json() : null
  } catch (error) {
    console.log('ERROR YEDIN')
  }
}

export default fetchProduct
