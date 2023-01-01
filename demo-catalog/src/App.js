import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Catalog from './components/Catalog'
import LeftBar from './components/LeftBar'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import WishList from './components/WishList'
import CartWrapper from './components/CartWrapper'

function App() {
  const [checked, setChecked] = useState({
    space: false,
    ninja: false,
    transport: false,
    buildings: false,
    homes: false,
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Filter />
        <div className="main">
          <LeftBar checked={checked} setChecked={setChecked} />

          <Routes>
            <Route
              path="/catalog"
              element={<Catalog checked={checked} setChecked={setChecked} />}
            />
            <Route path="/cart" element={<CartWrapper />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
