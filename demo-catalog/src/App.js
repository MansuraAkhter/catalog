import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Catalog from './components/Catalog'
import LeftBar from './components/LeftBar'
import { useState, useEffect } from 'react'
import useFetch from './useFetch'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import WishList from './components/WishList'
import CartWrapper from './components/CartWrapper'

function App() {
  const [cart, setCart] = useState([])
  const { products, isPending, Error } = useFetch(
    'http://localhost:8000/products',
  )
  const [minValue, setMinValue] = useState(100)
  const [maxValue, setMaxValue] = useState(5000)
  const [filteredProducts, setFileteredProducts] = useState(products)
  const [checked, setChecked] = useState({
    space: true,
    ninja: true,
    transport: true,
    buildings: true,
    homes: true,
  })
  const [search, setSearch] = useState('')
  let random = Math.random()
  let changeRandom = () => {
    random = 32
    console.log(random)
  }
  useEffect(() => {
    applyFilter()
  }, [search])

  const applyFilter = () => {
    setFileteredProducts(
      products.filter((product) => {
        // either return true if the product theme is true in checked

        return (
          checked[product.theme] &&
          product.title.toLowerCase().includes(search.toLowerCase()) &&
          product.price >= minValue &&
          product.price <= maxValue
        )
      }),
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Filter cart={cart} setCart={setCart} />
        <div className="main">
          <LeftBar
            checked={checked}
            setChecked={setChecked}
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            applyFilter={applyFilter}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Catalog
                  checked={checked}
                  setChecked={setChecked}
                  search={search}
                  setSearch={setSearch}
                  products={products}
                  isPending={isPending}
                  Error={Error}
                  filteredProducts={filteredProducts}
                  setFilteredProducts={setFileteredProducts}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/cart"
              element={<CartWrapper selected={cart} setSelected={setCart} />}
            />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
