import WishList from './WishList'
const WishListWrapper = ({ selected, setSelected }) => {
    const remove = (selectedProduct) => {
      setSelected((currentArray) => {
        return currentArray.filter((arrayValue) => {
          if (arrayValue.id === selectedProduct.id) return false
          else return true
        })
      })
    }
  
    return <div>{selected && <WishList selected={selected} remove={remove} />}</div>
  }
  
  export default WishListWrapper