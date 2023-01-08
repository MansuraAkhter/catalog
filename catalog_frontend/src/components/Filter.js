import { Link } from 'react-router-dom'
const Filter = ({ cart, setCart }) => {
  return (
    <nav className="secondrow">
      {/* currentpage */}
      <div className="secondiv" id="mainpage">
        Main page
        <div></div>
      </div>
      <div className="secondiv">
        <Link to="/compare">Compare Products </Link>
      </div>
      <div className="secondiv">
        <Link to="/wishlist">Wish List</Link>
      </div>
      <div className="secondiv">
        <Link to="/cart">
          {cart.length} Product(s) - $
          {cart.reduce((total, product) => {
            return total + product.price
          }, 0)}
        </Link>
      </div>
    </nav>
  )
}

export default Filter
