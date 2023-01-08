const ProductList = ({ products, addToCart }) => {
  return (
    <div className="catalog-details">
      {products.map((product) => (
        <div className="inside-details" key={product.id}>
          <img src={product.image} alt="" width="300" />
          <h2>Vender code: {product.id}</h2>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <br />
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
