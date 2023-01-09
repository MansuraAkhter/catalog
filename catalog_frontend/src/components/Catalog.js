
import ProductList from './ProductList'

const Catalog = ({
  checked,
  setChecked,
  search,
  setSearch,
  products,
  isPending,
  Error,
  filteredProducts,
  setFilteredProducts,
  cart,
  setCart,
  setWishList
}) => {
  const addToCart = (product) => {
    setCart((currentArray) => {
      let arraycopy = [...currentArray]
      arraycopy.push(product)
      return arraycopy


    })
  }

  const addToWishList = (product) => {
    setWishList((currentArray) => {
      let arraycopy = [...currentArray]
      arraycopy.push(product)
      return arraycopy


    })
  }  

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="catalog">
      <h1>Catalog</h1>
      {/* {Error && <div>{Error}</div>}
      {isPending && <div>Loading...</div>} */}

      <input
        className="search"
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
      />

      {products && (
        <ProductList products={filteredProducts} addToCart={addToCart} addToWishList={addToWishList}/>
      )}
    </div>
  )
}

export default Catalog
