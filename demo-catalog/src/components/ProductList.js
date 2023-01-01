const ProductList = ({ products, addToCart }) => {
  return (
    <div className="catalog-details">
      {products.map((product) => (
        <div className="inside-details" key={product.id}>
          <img src={product.image_url} alt="" width="300" />
          <h2>Vender code: {product.code}</h2>
          <p>{product.title}</p>
          <h3>Price:</h3>
          <h5>{product.price}$</h5>
          <button
            onClick={() => {
              addToCart(product)
            }}
          >
            buy
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
