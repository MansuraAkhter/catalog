import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Catalog from './components/Catalog'
import LeftBar from './components/LeftBar'
import { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import CartWrapper from './components/CartWrapper'
import WishListWrapper from './components/WishListWrapper'
import axios from 'axios'

function App() {
  const [wishList, setWishList] = useState([])
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [Error, setError] = useState(null)
  const [minValue, setMinValue] = useState(100)
  const [maxValue, setMaxValue] = useState(5000)
  const [filteredProducts, setFileteredProducts] = useState(products)
  const [checked, setChecked] = useState({
    "men's clothing": false,
    electronics: false,
    transport:false,
    jewelery: false,
    "women's clothing": false,
  })
  const [search, setSearch] = useState('')
  const getApiData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    setProducts(res.data)
    setFileteredProducts(res.data)
  }
  useEffect(() => {
    getApiData()
  }, [])

  useEffect(() => {
    applyFilter()
  }, [search])

  const applyFilter = () => {
    console.log(products)
    setFileteredProducts(
      products.filter((product) => {
        // either return true if the product theme is true in checked
        console.log(product)
        return (
          checked[product.category] &&
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
                  wishList={wishList}
                  setWishList={setWishList}
                />
              }
            />
            <Route
              path="/cart"
              element={<CartWrapper selected={cart} setSelected={setCart} />}
            />
            <Route path="/wishlist" element={<WishListWrapper selected={wishList} setSelected={setWishList}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
