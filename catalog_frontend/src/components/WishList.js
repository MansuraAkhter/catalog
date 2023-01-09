const WishList = ({ selected, remove }) => {
    return ( 
        
            <div>
      <div className="cart">
        {selected.map((selectedProduct) => (
          <div className="cart-details" key={selectedProduct.id}>
            <img src={selectedProduct.image} alt="" width="300" height="300"/>
            <h2>Vender code: {selectedProduct.id}</h2>
            <h5>{selectedProduct.title}</h5>
            <br />
            <p>{selectedProduct.description}</p>
            <br />
            <h3>Price:</h3>
            <h5>{selectedProduct.price}$</h5>
            <button
              onClick={() => {
                remove(selectedProduct)
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
        
     );
}
 
export default WishList;