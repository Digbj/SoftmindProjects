
import Cart from './components/cart'
import Footer from './components/footer'
import Items from './components/items'
import Navbar from './components/navbar'
import Simmer from './components/simmer'
import Welcome from './components/welcome'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Context } from './context/cartcontext'
import Payment from './components/payment'

function App() {
  return (
    <>
    
    <Router>
    <Context>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pay' element={<Payment/>}/>
      </Routes>
      <Footer/>
      </Context>
    </Router>
   
    </>
  )
}

export default App
