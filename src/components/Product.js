const product = ({ data }) => {
  const { id, title, price, description, category, image, rating } = data
  return (
    <>
      {' '}
      <p>{title}</p>
    </>
  )
}

export default product
