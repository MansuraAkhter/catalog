import Cart from './Cart'


const CartWrapper = ({ selected, setSelected }) => {
  const remove = (selectedProduct) => {
    setSelected((currentArray) => {
      return currentArray.filter((arrayValue) => {
        if (arrayValue.id === selectedProduct.id) return false
        else return true
      })
    })
  }

  return <div>{selected && <Cart selected={selected} remove={remove} />}</div>
}

export default CartWrapper
