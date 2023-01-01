import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import useFetch from '../useFetch'
import Cart from './Cart'
import CartWrapper from './CartWrapper'

const Catalog = ({ checked, setChecked }) => {
  const { products, isPending, Error } = useFetch(
    'http://localhost:8000/products',
  )
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [filteredProducts, setFileteredProducts] = useState(products)

  const addToCart = (product) => {
    setCart((currentArray) => {
      let arraycopy = [...currentArray]
      arraycopy.push(product)
      return arraycopy
    })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    setFileteredProducts(
      products.filter((product) => {
        // either return true if the product theme is true in checked
        return (
          checked[product.theme] &&
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      }),
    )
  }, [checked, search])

  return (
    <div className="catalog">
      <h1>Catalog</h1>
      {Error && <div>{Error}</div>}
      {isPending && <div>Loading...</div>}

      <input
        className="search"
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
      />

      {products && (
        <ProductList products={filteredProducts} addToCart={addToCart} />
      )}

      <CartWrapper selected={cart} setSelected={setCart} />
    </div>
  )
}

export default Catalog
