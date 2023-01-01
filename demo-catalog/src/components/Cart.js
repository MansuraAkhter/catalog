const Cart = ({selected,remove}) => {
    return ( 
        <div>
            <div className="count">{selected.length}</div>
           {selected.map((selectedProduct) => (
                <div className="cart" key={selectedProduct.id}>
                    <img src={selectedProduct.image_url} alt="" width='300'/>
                    <h2>Vender code: {selectedProduct.code}</h2>
                    <p>{selectedProduct.title}</p>
                    <h3>Price:</h3>
                    <h5>{selectedProduct.price}$</h5>
                    <button onClick={() => {remove(selectedProduct)}}>Remove</button>
                </div>
            ))}
        </div>
     );
}
 
export default Cart;