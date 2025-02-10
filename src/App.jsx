import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './Components/AllProducts/AllProducts'
import Cart from './Pages/Cart/Cart'

function App() {
  const [cart, setCart] = useState([])
  const AddToCart = (product) => {
    setCart([...cart, product])
    console.log(cart)
   

  }

  return (
    <>
      {/* <div>
        <BrowserRouter>
        <Routes>
          <Route path='/Cart' element={<Cart cart={cart} />} />
          <Route path='/AllProducts' element={ <AllProducts AddToCart={AddToCart} />} />
        </Routes>
        </BrowserRouter>
        </div>  */}
    </>
  )
}

export default App
