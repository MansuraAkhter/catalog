
const ProductList = ({ products, addToCart,addToWishList }) => {
  
  return (
    <div className="catalog-details">
      {products.map((product) => (
        <div className="inside-details" key={product.id}>
          <img src={product.image} alt="" width="300" height="300"/>
          <button onClick={() =>{
            addToWishList(product)
          }}><i class="far fa-heart" id="heart"></i></button>
          <h2>Vender code: {product.id}</h2>
          <h5>{product.title}</h5>
          <br />
          <p>{product.description.slice(0,180)}</p>
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
